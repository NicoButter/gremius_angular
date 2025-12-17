import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit, OnDestroy {
  // Countdown
  countdown = { days: 0, hours: 0, minutes: 0, seconds: 0 };
  private interval: any;
  private targetDate = new Date('Nov 16, 2025 00:00:00').getTime();

  // Modal QR
  qrModalOpen: boolean = false;
  qrModalSrc: string = '';
  qrModalAlt: string = '';

  // Modal bienvenida
  welcomeModalOpen: boolean = false;

  ngOnInit(): void {
    // Countdown logic commented to avoid timers while countdown is hidden
    // this.updateCountdown();
    // this.interval = setInterval(() => this.updateCountdown(), 1000);

    // Mostrar bienvenida siempre al entrar / refrescar
    this.welcomeModalOpen = true;

    // Mostrar solo una vez por usuario
    // 
        /*
    const seenWelcome = localStorage.getItem('welcomeModalSeen');
    if (!seenWelcome) {
      this.welcomeModalOpen = true;
    }
    */
  }

  ngOnDestroy(): void {
    // clearInterval(this.interval); // commented because countdown disabled
  }

  // Countdown
  private updateCountdown(): void {
    /* Countdown logic commented while feature disabled to avoid intervals:
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
    */
  }

  // Abrir / cerrar modal QR
  openQrModal(src: string, alt: string) {
    this.qrModalSrc = src;
    this.qrModalAlt = alt;
    this.qrModalOpen = true;
  }
  closeQrModal() {
    this.qrModalOpen = false;
  }

  // Abrir / cerrar modal bienvenida
  closeWelcomeModal() {
    this.welcomeModalOpen = false;
    // Para solo una vez:
    // localStorage.setItem('welcomeModalSeen', 'true');
  }

  // ESC key listener
  @HostListener('document:keydown.escape', ['$event'])
  handleEscape(event: KeyboardEvent) {
    if (this.qrModalOpen) this.closeQrModal();
    if (this.welcomeModalOpen) this.closeWelcomeModal();
  }

  // Click fuera del modal QR
  onModalClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (target.classList.contains('qr-modal')) {
      this.closeQrModal();
    }
  }

  // Click fuera del modal bienvenida
  onWelcomeModalClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (target.classList.contains('welcome-modal')) {
      this.closeWelcomeModal();
    }
  }
}
