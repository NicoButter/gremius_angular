import { Component, AfterViewInit, OnDestroy, ElementRef } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sistema-salarial',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './sistema-salarial.component.html',
  styleUrls: ['./sistema-salarial.component.css']
})
export class SistemaSalarialComponent implements AfterViewInit, OnDestroy {

  private observer: IntersectionObserver | null = null;

  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    const targets: NodeListOf<HTMLElement> =
      this.el.nativeElement.querySelectorAll('.ss-card');

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
      { threshold: 0.1 }
    );

    targets.forEach((target) => this.observer!.observe(target));
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}