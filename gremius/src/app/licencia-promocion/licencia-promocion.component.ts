import { Component, AfterViewInit, OnDestroy, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-licencia-promocion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './licencia-promocion.component.html',
  styleUrls: ['./licencia-promocion.component.css'],
})
export class LicenciaPromocionComponent implements AfterViewInit, OnDestroy {
  private observer: IntersectionObserver | null = null;

  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    const cards = Array.from(
      this.el.nativeElement.querySelectorAll('.lp-card')
    ) as HTMLElement[];

    cards.forEach(card => card.classList.add('reveal-init'));

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).classList.add('is-visible');
            this.observer?.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 }
    );

    cards.forEach((card, i) => {
      card.style.setProperty('--reveal-delay', `${i * 60}ms`);
      this.observer!.observe(card);
    });
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}