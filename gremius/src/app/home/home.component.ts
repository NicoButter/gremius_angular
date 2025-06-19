import { Component } from '@angular/core';
import { HeroComponent } from '../hero/hero.component';
import { ActualidadComponent } from '../actualidad/actualidad.component';
import { SedesComponent } from '../sedes/sedes.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, ActualidadComponent, SedesComponent],
  template: `
    <app-hero></app-hero>
    <app-actualidad></app-actualidad>
    <app-sedes></app-sedes>
  `
})
export class HomeComponent {}