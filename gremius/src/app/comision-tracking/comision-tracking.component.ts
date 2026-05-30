import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, Inject, OnDestroy, PLATFORM_ID, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { isPlatformBrowser } from '@angular/common';
import * as L from 'leaflet';
import { TrackingService } from '../services/tracking.service';

@Component({
  selector: 'app-comision-tracking',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './comision-tracking.component.html',
  styleUrls: ['./comision-tracking.component.css'],
})
export class ComisionTrackingComponent implements AfterViewInit, OnDestroy {
  @ViewChild('trackingAdminMap') private trackingAdminMap?: ElementRef<HTMLElement>;

  destination = 'Caleta Olivia';
  status = 'La comision se dirige a Caleta Olivia';
  destinations = [
    'Caleta Olivia',
    'Rio Gallegos',
    'El Calafate',
    'Puerto San Julian',
    'Pico Truncado',
    'Las Heras',
    'Puerto Deseado',
    'Gobernador Gregores',
    'Comandante Luis Piedra Buena',
    'Perito Moreno',
    'Los Antiguos',
    '28 de Noviembre',
    'Rio Turbio',
  ];
  accessEmail = '';
  accessPassword = '';
  authenticated = false;
  showAccessModal = false;
  authenticating = false;
  transmitting = false;
  saving = false;
  message = '';
  errorMessage = '';
  accessError = '';

  private watchId?: number;
  private lastPosition?: GeolocationPosition;
  private map?: L.Map;
  private marker?: L.Marker;
  private pendingPosition?: [number, number];
  private readonly defaultCenter: [number, number] = [-48.815, -69.955];

  constructor(
    private trackingService: TrackingService,
    @Inject(PLATFORM_ID) private platformId: object,
    private cdr: ChangeDetectorRef
  ) {}

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    if (this.authenticated) {
      this.initializeMap();
    }
  }

  ngOnDestroy(): void {
    this.stopTracking();
    this.map?.remove();
  }

  openAccessModal(): void {
    this.accessEmail = '';
    this.accessPassword = '';
    this.accessError = '';
    this.showAccessModal = true;
  }

  closeAccessModal(): void {
    this.showAccessModal = false;
  }

  validateAccess(): void {
    this.accessError = '';
    this.authenticating = true;

    this.trackingService.signIn(this.accessEmail.trim(), this.accessPassword)
      .then(() => {
        this.authenticated = true;
        this.showAccessModal = false;
        this.accessPassword = '';
        this.cdr.detectChanges();
        setTimeout(() => this.initializeMap());
      })
      .catch(() => {
        this.accessError = 'Email o contrasena incorrectos.';
      })
      .finally(() => {
        this.authenticating = false;
      });
  }

  startTracking(): void {
    this.errorMessage = '';
    this.message = '';

    if (!navigator.geolocation) {
      this.errorMessage = 'Este dispositivo no permite obtener ubicacion GPS.';
      return;
    }

    this.transmitting = true;
    this.watchId = navigator.geolocation.watchPosition(
      (position) => this.publishPosition(position),
      () => {
        this.errorMessage = 'No se pudo obtener la ubicacion. Revisa permisos de GPS.';
        this.transmitting = false;
      },
      {
        enableHighAccuracy: true,
        maximumAge: 5000,
        timeout: 15000,
      }
    );
  }

  stopTracking(): void {
    if (this.watchId !== undefined) {
      navigator.geolocation.clearWatch(this.watchId);
      this.watchId = undefined;
    }

    if (this.transmitting) {
      this.transmitting = false;
      const coords = this.lastPosition?.coords;

      this.trackingService.updateCurrentLocation({
        active: false,
        lat: coords?.latitude ?? -48.815,
        lng: coords?.longitude ?? -69.955,
        destination: this.destination,
        status: 'La comision finalizo la transmision.',
        updatedAt: Date.now(),
        accuracy: coords?.accuracy,
        heading: coords?.heading,
        speed: coords?.speed,
      });
    }
  }

  updateText(): void {
    this.status = `La comision se dirige a ${this.destination}`;
  }

  private publishPosition(position: GeolocationPosition): void {
    this.lastPosition = position;
    this.updateMarker(position.coords.latitude, position.coords.longitude);
    this.saving = true;
    this.trackingService.updateCurrentLocation({
      active: true,
      lat: position.coords.latitude,
      lng: position.coords.longitude,
      destination: this.destination,
      status: this.status,
      updatedAt: Date.now(),
      accuracy: position.coords.accuracy,
      heading: position.coords.heading,
      speed: position.coords.speed,
    }).then(() => {
      this.saving = false;
      this.message = 'Ubicacion actualizada.';
    }).catch(() => {
      this.saving = false;
      this.errorMessage = 'No se pudo guardar la ubicacion en Firebase.';
    });
  }

  private async initializeMap(): Promise<void> {
    if (this.map || !isPlatformBrowser(this.platformId)) {
      return;
    }

    const mapElement = this.trackingAdminMap?.nativeElement;
    if (!mapElement) {
      setTimeout(() => this.initializeMap(), 50);
      return;
    }

    try {
      this.map = L.map(mapElement, {
        center: this.defaultCenter,
        zoom: 6,
        zoomControl: true,
        scrollWheelZoom: true,
      });

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: '&copy; OpenStreetMap contributors',
      })
        .addTo(this.map);

      this.refreshMapSize();

      if (this.pendingPosition) {
        const [lat, lng] = this.pendingPosition;
        this.pendingPosition = undefined;
        this.updateMarker(lat, lng);
      }
    } catch {
      this.errorMessage = 'No se pudo cargar el mapa. Revisa la conexion e intenta nuevamente.';
    }
  }

  private updateMarker(lat: number, lng: number): void {
    if (!this.map) {
      this.pendingPosition = [lat, lng];
      return;
    }

    const latLng: [number, number] = [lat, lng];
    const icon = L.divIcon({
      className: 'tracking-admin-marker',
      html: '<span></span>',
      iconSize: [28, 28],
      iconAnchor: [14, 14],
    });

    if (!this.marker) {
      this.marker = L.marker(latLng, { icon }).addTo(this.map);
      this.map.setView(latLng, 10);
      return;
    }

    this.marker.setLatLng(latLng);
    this.map.panTo(latLng);
  }

  private refreshMapSize(): void {
    if (!this.map) {
      return;
    }

    requestAnimationFrame(() => this.map?.invalidateSize());
    setTimeout(() => this.map?.invalidateSize(), 250);
  }
}
