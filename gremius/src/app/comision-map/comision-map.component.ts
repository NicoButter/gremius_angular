import { AfterViewInit, Component, ElementRef, Inject, OnDestroy, PLATFORM_ID, ViewChild } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Subscription } from 'rxjs';
import { TrackingLocation, TrackingService } from '../services/tracking.service';

@Component({
  selector: 'app-comision-map',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './comision-map.component.html',
  styleUrls: ['./comision-map.component.css'],
})
export class ComisionMapComponent implements AfterViewInit, OnDestroy {
  @ViewChild('commissionMap') private commissionMap?: ElementRef<HTMLElement>;

  location: TrackingLocation | null = null;
  loading = true;
  errorMessage = '';
  lastUpdateLabel = 'Sin datos';

  private subscription?: Subscription;
  private map?: any;
  private marker?: any;
  private leaflet?: any;
  private pendingLocation: TrackingLocation | null = null;
  private readonly defaultCenter: [number, number] = [-48.815, -69.955];

  constructor(
    private trackingService: TrackingService,
    @Inject(PLATFORM_ID) private platformId: object
  ) {}

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    this.initializeMap();
    this.subscription = this.trackingService.watchCurrentLocation().subscribe({
      next: (location) => {
        this.loading = false;
        this.location = location;
        this.lastUpdateLabel = this.formatLastUpdate(location?.updatedAt);
        this.updateMarker(location);
      },
      error: () => {
        this.loading = false;
        this.errorMessage = 'No se pudo cargar la ubicacion de la comision.';
      },
    });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
    this.map?.remove();
  }

  get isStale(): boolean {
    if (!this.location?.updatedAt) {
      return true;
    }

    return Date.now() - this.location.updatedAt > 3 * 60 * 1000;
  }

  get visibleStatus(): string {
    if (!this.location) {
      return 'Todavia no hay una ubicacion publicada.';
    }

    if (!this.location.active) {
      return 'La comision no tiene un viaje activo en este momento.';
    }

    if (this.isStale) {
      return `Ultima ubicacion registrada: ${this.lastUpdateLabel}.`;
    }

    return this.location.status || `La comision se dirige a ${this.location.destination}.`;
  }

  private async initializeMap(): Promise<void> {
    if (this.map || !isPlatformBrowser(this.platformId)) {
      return;
    }

    const mapElement = this.commissionMap?.nativeElement;
    if (!mapElement) {
      setTimeout(() => this.initializeMap(), 50);
      return;
    }

    try {
      this.leaflet = await import('leaflet');
      this.map = this.leaflet.map(mapElement, {
        center: this.defaultCenter,
        zoom: 6,
        zoomControl: true,
        scrollWheelZoom: true,
      });

      this.leaflet
        .tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          maxZoom: 18,
          attribution: '&copy; OpenStreetMap contributors',
        })
        .addTo(this.map);

      this.refreshMapSize();

      if (this.pendingLocation) {
        const pendingLocation = this.pendingLocation;
        this.pendingLocation = null;
        this.updateMarker(pendingLocation);
      }
    } catch {
      this.loading = false;
      this.errorMessage = 'No se pudo cargar el mapa.';
    }
  }

  private updateMarker(location: TrackingLocation | null): void {
    if (!this.map || !this.leaflet || !location?.lat || !location?.lng) {
      this.pendingLocation = location;
      return;
    }

    const latLng: [number, number] = [location.lat, location.lng];
    const icon = this.leaflet.divIcon({
      className: 'commission-marker',
      html: '<span></span>',
      iconSize: [28, 28],
      iconAnchor: [14, 14],
    });

    if (!this.marker) {
      this.marker = this.leaflet.marker(latLng, { icon }).addTo(this.map);
      this.map.setView(latLng, 8);
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

  private formatLastUpdate(updatedAt?: number): string {
    if (!updatedAt) {
      return 'Sin datos';
    }

    return new Intl.DateTimeFormat('es-AR', {
      hour: '2-digit',
      minute: '2-digit',
      day: '2-digit',
      month: '2-digit',
    }).format(new Date(updatedAt));
  }
}
