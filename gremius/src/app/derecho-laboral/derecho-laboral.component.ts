import { Component, AfterViewInit, OnDestroy, ElementRef } from '@angular/core';

@Component({
  selector: 'app-derecho-laboral',
  standalone: true,
  imports: [],
  templateUrl: './derecho-laboral.component.html',
  styleUrl: './derecho-laboral.component.css'
})
export class DerechoLaboralComponent implements AfterViewInit, OnDestroy {

  private observer: IntersectionObserver | null = null;

  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    const targets: NodeListOf<HTMLElement> =
      this.el.nativeElement.querySelectorAll('.dl-card');

    targets.forEach((target, i) => {
      target.classList.add('reveal-init');
      target.style.setProperty('--reveal-delay', `${i * 0.1}s`);
    });

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('reveal-init');
            entry.target.classList.add('is-visible');
            this.observer?.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 }
    );

    targets.forEach((target) => this.observer!.observe(target));
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
