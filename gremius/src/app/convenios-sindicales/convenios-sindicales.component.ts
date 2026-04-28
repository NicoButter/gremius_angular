import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-convenios-sindicales',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './convenios-sindicales.component.html',
  styleUrls: ['./convenios-sindicales.component.css']
})
export class ConveniosSindicalesComponent {
  logos = [
    { src: '/assets/images/logo_apdfa.webp',         alt: 'Logo APDFA',         nombre: 'APDFA' },
    { src: '/assets/images/logo_asimira.webp',        alt: 'Logo ASIMIRA',       nombre: 'ASIMIRA' },
    { src: '/assets/images/logo_ate.webp',            alt: 'Logo ATE',           nombre: 'ATE' },
    { src: '/assets/images/logo_civil_policial.webp', alt: 'Logo Civil Policial',nombre: 'Civil Policial' },
    { src: '/assets/images/logo_camioneros.webp',     alt: 'Logo Camioneros',    nombre: 'Camioneros' },
    { src: '/assets/images/logo_la_bancaria.webp',    alt: 'Logo La Bancaria',   nombre: 'La Bancaria' }
  ];
}
