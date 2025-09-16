import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  destinatario: string | null = null;
  contactData = { name: '', email: '', message: '' };
  destinatarios = [
    { label: 'Gremio Judiciales Río Gallegos - El Calafate', email: 'gremiojudicialesrg@gmail.com' },
    { label: 'Gremio Judiciales San Julián - Caleta Olivia', email: 'empleadosjudiciales3dejulio@hotmail.com' }
  ];
  showSuccessAlert = false;

  // flags de feedback
  sending = false;
  sent = false;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // Chequear parámetro success (cuando vuelve desde FormSubmit)
    this.route.queryParams.subscribe(params => {
      if (params['success'] === 'true') {
        this.showSuccessAlert = true;
        setTimeout(() => {
          this.showSuccessAlert = false;
          this.back();
        }, 3000);
      }
    });
  }

  selectDestinatario(email: string) {
    this.destinatario = email;
  }

  back() {
    this.destinatario = null;
    this.contactData = { name: '', email: '', message: '' };
  }

  get formAction(): string {
    return this.destinatario ? `https://formsubmit.co/${this.destinatario}` : '';
  }

  onSend() {
    this.sending = true;
    setTimeout(() => {
      this.sending = false;
      this.sent = true;
      // Ocultamos el mensaje después de 3s
      setTimeout(() => this.sent = false, 3000);
    }, 800);
  }
}
