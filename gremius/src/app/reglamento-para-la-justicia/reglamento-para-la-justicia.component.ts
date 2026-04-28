import { Component, AfterViewInit, OnDestroy, ElementRef } from '@angular/core';

@Component({
  selector: 'app-reglamento-para-la-justicia',
  standalone: true,
  imports: [],
  templateUrl: './reglamento-para-la-justicia.component.html',
  styleUrl: './reglamento-para-la-justicia.component.css'
})
export class ReglamentoParaLaJusticiaComponent implements AfterViewInit, OnDestroy {
  private observer: IntersectionObserver | null = null;

  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    const cards = Array.from(
      this.el.nativeElement.querySelectorAll('.rj-card')
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
      card.style.setProperty('--reveal-delay', `${i * 70}ms`);
      this.observer!.observe(card);
    });
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
