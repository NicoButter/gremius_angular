import { Component, OnInit, OnDestroy, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('radioPlayer') radioPlayer!: ElementRef<HTMLAudioElement>;

  noticias = [
    {
      titulo: 'Encuentro De Mujeres y Diversidades',
      descripcion: 'Este encuentro será un espacio de reflexión, intercambio y construcción colectiva, pensado para fortalecer la organización, compartir experiencias y seguir ampliando derechos.',
      image: '/assets/images/encuentro_mujeres_calafate_2025.png',
      autor: 'Equipo de Comunicación'
    },
    {
      titulo: 'Estrenamos Página WEB!!',
      descripcion: 'Aquí vas a encontrar la historia de nuestro gremio, las últimas noticias, información sobre actividades, convenios, comunicados oficiales y mucho más.',
      image: '/assets/images/nueva_pagina_web_1.png',
      autor: 'Equipo IT.'
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
      image: '/assets/images/companieros_2024.png',
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

  ngAfterViewInit(): void {
    if (this.radioPlayer) {
      const player = this.radioPlayer.nativeElement;
      player.addEventListener('loadedmetadata', () => {
        try {
          if (player.seekable.length > 0) {
            player.currentTime = player.seekable.end(0);
          }
        } catch (e) {
          console.warn('No se pudo ajustar el tiempo del stream', e);
        }
      });
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
