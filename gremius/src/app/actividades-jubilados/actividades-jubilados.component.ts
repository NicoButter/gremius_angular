import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Novedad {
  image: string;
  title: string;
  detail: string;
}

@Component({
  selector: 'app-actividades-jubilados',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './actividades-jubilados.component.html',
  styleUrls: ['./actividades-jubilados.component.css']
})
export class ActividadesJubiladosComponent {
  novedades: Novedad[] = [
    {
      image: 'assets/images/gimnasia-jubilados.png',
      title: 'Taller de Yoga',
      detail: 'No nos tomamos descanso!!!!'
    },
    {
      image: 'assets/images/folklore-jubilados.png',
      title: 'Salida Cultural',
      detail: 'El Folklore nos une y nos hace bailar'
    },
    // {
    //   image: 'assets/images/jubilados/novedad3.jpg',
    //   title: 'Charlas de Salud',
    //   detail: 'Charlas informativas sobre nutrición y cuidados médicos, especialmente para adultos mayores.'
    // }
  ];
}
