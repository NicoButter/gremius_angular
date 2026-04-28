import { Component, AfterViewInit, OnDestroy, ElementRef } from '@angular/core';

@Component({
  selector: 'app-derecho-sindical',
  standalone: true,
  imports: [],
  templateUrl: './derecho-sindical.component.html',
  styleUrl: './derecho-sindical.component.css'
})
export class DerechoSindicalComponent implements AfterViewInit, OnDestroy {
  private observer: IntersectionObserver | null = null;

  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    const cards = Array.from(
      this.el.nativeElement.querySelectorAll('.ds-card')
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
      { threshold: 0.1 }
    );

    cards.forEach((card, i) => {
      card.style.setProperty('--reveal-delay', `${i * 100}ms`);
      this.observer!.observe(card);
    });
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
