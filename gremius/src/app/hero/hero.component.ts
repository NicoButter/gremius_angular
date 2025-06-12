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
      titulo: 'Día Del Periodista',
      descripcion: 'Conmemoramos el Día Del Periodista.',
      image: '/assets/images/dia_del_periodista_2025.png',
      autor: 'Equipo de Comunicación'
    },
    {
      titulo: 'Jueza con pedido de Jury.',
      descripcion: 'Una jueza con pedido de jury y su secretario sumariado renunció, pero hay denuncias contra magistrados que no avanzaron.',
      image: '/assets/images/jueza_pierde_el_jury_2025.png',
      autor: 'Redacción Judicial'
    },
    {
      titulo: 'Reunión con el ministro de trabajo',
      descripcion: 'Se acordó una mesa de diálogo para el mes de julio.',
      image: '/assets/images/hero_2.jpg',
      autor: 'Secretaría del Gremio'
    },
    {
      titulo: 'Marcha en Río Gallegos',
      descripcion: 'Gran convocatoria frente al Tribunal Superior de Justicia.',
      image: '/assets/images/hero_3.jpg',
      autor: 'Corresponsal Local'
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
