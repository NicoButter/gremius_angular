import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent implements OnInit, OnDestroy {
  noticias = [
    {
      titulo: 'Paro General el lunes',
      descripcion: 'El sindicato judicial anunció paro por 48hs en toda la provincia.',
      image: '/assets/images/hero_1.jpg'
    },
    {
      titulo: 'Reunión con el ministro de trabajo',
      descripcion: 'Se acordó una mesa de diálogo para el mes de julio.',
      image: '/assets/images/hero_2.jpg'
    },
    {
      titulo: 'Marcha en Río Gallegos',
      descripcion: 'Gran convocatoria frente al Tribunal Superior de Justicia.',
      image: '/assets/images/hero_3.jpg'
    }
  ];

  currentSlide = 0;
  private intervalId: any;

  ngOnInit(): void {
    if (typeof window !== 'undefined') {
      this.intervalId = setInterval(() => {
        this.currentSlide = (this.currentSlide + 1) % this.noticias.length;
      }, 5000);
    }
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  goToSlide(index: number): void {
    this.currentSlide = index;
  }
}
