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
    { src: '/assets/images/logo_apdfa.png', alt: 'Sindicato 1' },
    { src: '/assets/images/logo_asimira.png', alt: 'Sindicato 2' },
    { src: '/assets/images/logo_ate.png', alt: 'Sindicato 3' },
    { src: '/assets/images/logo_civil_policial.png', alt: 'Sindicato 4' },
    { src: '/assets/images/logo_camioneros.png', alt: 'Sindicato 5' },
    { src: '/assets/images/logo_la_bancaria.png', alt: 'Sindicato 6' }
  ];
}
