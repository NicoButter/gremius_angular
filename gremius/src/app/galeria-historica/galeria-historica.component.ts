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
  images = Array.from({ length: 21 }, (_, i) => ({
    src: `/assets/galeria/image-${i + 1}.png`,
    alt: `Imagen histórica ${i + 1}`
  }));

  currentSlide = 0;
  private intervalId: any;

  ngOnInit(): void {
    // Cambiar automáticamente cada 4 segundos
    this.intervalId = setInterval(() => {
      this.currentSlide = (this.currentSlide + 1) % this.images.length;
    }, 4000);
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }

  goToSlide(index: number): void {
    this.currentSlide = index;
  }

  prevSlide(): void {
    this.currentSlide = (this.currentSlide - 1 + this.images.length) % this.images.length;
  }

  nextSlide(): void {
    this.currentSlide = (this.currentSlide + 1) % this.images.length;
  }
}
