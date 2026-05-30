import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { HeroComponent } from '../hero/hero.component';
import { ActualidadComponent } from '../actualidad/actualidad.component';
import { SedesComponent } from '../sedes/sedes.component';
import { Subscription } from 'rxjs';
import { TrackingLocation, TrackingService } from '../services/tracking.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, HeroComponent, ActualidadComponent, SedesComponent],
  template: `
    <app-hero></app-hero>
    <section class="tracking-callout" *ngIf="showTrackingCallout">
      <div>
        <span>En vivo</span>
        <h2>Segui a la comision por la provincia</h2>
        <p>{{ trackingStatus }}</p>
      </div>
      <a routerLink="/mapa-comision">Ver mapa</a>
    </section>
    <app-actualidad></app-actualidad>
    <app-sedes></app-sedes>
  `,
  styles: [`
    .tracking-callout {
      width: min(1180px, calc(100% - 32px));
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 18px;
      margin: 28px auto;
      padding: 18px 20px;
      border-left: 5px solid #b71c1c;
      border-radius: 8px;
      background: #ffffff;
      box-shadow: 0 14px 36px rgba(15, 23, 42, .12);
    }

    .tracking-callout span {
      display: inline-flex;
      margin-bottom: 8px;
      color: #b71c1c;
      font-size: .78rem;
      font-weight: 800;
      text-transform: uppercase;
    }

    .tracking-callout h2 {
      margin: 0 0 6px;
      color: #111827;
      font-size: clamp(1.35rem, 3vw, 2rem);
      line-height: 1.15;
    }

    .tracking-callout p {
      margin: 0;
      color: #4b5563;
      line-height: 1.45;
    }

    .tracking-callout a {
      flex: 0 0 auto;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      min-height: 42px;
      padding: 0 18px;
      border-radius: 6px;
      background: #b71c1c;
      color: #ffffff;
      font-weight: 800;
      text-decoration: none;
    }

    @media (max-width: 720px) {
      .tracking-callout {
        align-items: stretch;
        flex-direction: column;
      }
    }
  `]
})
export class HomeComponent implements OnInit, OnDestroy {
  showTrackingCallout = false;
  trackingStatus = 'La comision esta transmitiendo su recorrido.';

  private subscription?: Subscription;
  private latestLocation: TrackingLocation | null = null;
  private liveCheckInterval?: ReturnType<typeof setInterval>;

  constructor(private trackingService: TrackingService) {}

  ngOnInit(): void {
    this.subscription = this.trackingService.watchCurrentLocation().subscribe((location) => {
      this.latestLocation = location;
      this.refreshTrackingCallout();
      this.trackingStatus = location?.status || 'La comision esta transmitiendo su recorrido.';
    });

    this.liveCheckInterval = setInterval(() => this.refreshTrackingCallout(), 30000);
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
    if (this.liveCheckInterval) {
      clearInterval(this.liveCheckInterval);
    }
  }

  private refreshTrackingCallout(): void {
    this.showTrackingCallout = this.isLive(this.latestLocation);
  }

  private isLive(location: TrackingLocation | null): boolean {
    if (!location?.active || !location.updatedAt) {
      return false;
    }

    return Date.now() - location.updatedAt <= 3 * 60 * 1000;
  }
}
