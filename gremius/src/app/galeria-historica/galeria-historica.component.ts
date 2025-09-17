import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-galeria-historica',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './galeria-historica.component.html',
  styleUrls: ['./galeria-historica.component.css']
})
export class GaleriaHistoricaComponent implements OnInit, OnDestroy {
  images = Array.from({ length: 41 }, (_, i) => ({
    src: `/assets/galeria/image-${i + 1}.png`,
    alt: `Imagen histórica ${i + 1}`
  }));

  currentSlide = 0;
  private intervalId: any;

  ngOnInit(): void {
    this.startAutoSlide();
  }

  ngOnDestroy(): void {
    this.clearAutoSlide();
  }

  // Método para iniciar el temporizador
  private startAutoSlide(): void {
    this.clearAutoSlide(); // Por si acaso ya existía
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, 4000);
  }

  // Método para limpiar el temporizador
  private clearAutoSlide(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  goToSlide(index: number): void {
    this.currentSlide = index;
    this.restartAutoSlide();
  }

  prevSlide(): void {
    this.currentSlide = (this.currentSlide - 1 + this.images.length) % this.images.length;
    this.restartAutoSlide();
  }

  nextSlide(): void {
    this.currentSlide = (this.currentSlide + 1) % this.images.length;
    this.restartAutoSlide();
  }

  // Reinicia el temporizador después de cualquier interacción
  private restartAutoSlide(): void {
    this.clearAutoSlide();
    this.startAutoSlide();
  }
}