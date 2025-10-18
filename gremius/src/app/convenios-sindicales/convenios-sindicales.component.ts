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
    { src: '/assets/images/logo_apdfa.webp', alt: 'Sindicato 1' },
    { src: '/assets/images/logo_asimira.webp', alt: 'Sindicato 2' },
    { src: '/assets/images/logo_ate.webp', alt: 'Sindicato 3' },
    { src: '/assets/images/logo_civil_policial.webp', alt: 'Sindicato 4' },
    { src: '/assets/images/logo_camioneros.webp', alt: 'Sindicato 5' },
    { src: '/assets/images/logo_la_bancaria.webp', alt: 'Sindicato 6' }
  ];
}
