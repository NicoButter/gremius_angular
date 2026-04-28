import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface LogoHistorico {
  image: string;
  title: string;
  period: string;
  description: string;
}

@Component({
  selector: 'app-logos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './logos.component.html',
  styleUrl: './logos.component.css'
})
export class LogosComponent {
  logos: LogoHistorico[] = [
    {
      image: 'assets/images/logo_institucional_3.webp',
      title: 'Logo original',
      period: 'Década de 1980',
      description: 'El primer logo institucional, símbolo de los inicios del gremio.'
    },
    {
      image: 'assets/images/logo_institucional_1.webp',
      title: 'Logo años 2000',
      period: 'Década de 2000',
      description: 'Un rediseño moderno que reflejaba el crecimiento y consolidación.'
    },
    {
      image: 'assets/images/logo_institucional_2.webp',
      title: 'Logo años 2010',
      period: 'Década del 2010',
      description: 'La versión anterior a la vigente, con estética y proyección al futuro.'
    },
    {
      image: 'assets/images/logo_judiciales_3.webp',
      title: 'Logo actual',
      period: 'Actualidad',
      description: 'La versión vigente, con una estética moderna y renovada.'
    }
  ];
}
