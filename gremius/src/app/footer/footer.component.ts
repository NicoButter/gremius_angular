import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit, OnDestroy {

  countdown = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  };

  private interval: any;
  private targetDate = new Date('Nov 16, 2025 00:00:00').getTime();

  ngOnInit(): void {
    this.updateCountdown();
    this.interval = setInterval(() => this.updateCountdown(), 1000);
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }

  private updateCountdown(): void {
    const now = new Date().getTime();
    const distance = this.targetDate - now;

    if (distance <= 0) {
      clearInterval(this.interval);
      this.countdown = { days: 0, hours: 0, minutes: 0, seconds: 0 };
      return;
    }

    this.countdown.days = Math.floor(distance / (1000 * 60 * 60 * 24));
    this.countdown.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    this.countdown.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    this.countdown.seconds = Math.floor((distance % (1000 * 60)) / 1000);
  }
}
