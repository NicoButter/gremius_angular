import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import emailjs from '@emailjs/browser';

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
  sending = false;
  error = false;

  // IDs de EmailJS (reemplazar templateID y publicKey con los tuyos)
  private serviceID = 'service_ck9nnbd';
  private templateID = 'template_yyy';
  private publicKey = 'user_zzz';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params['success'] === 'true') {
        this.showSuccessAlert = true;
        setTimeout(() => this.showSuccessAlert = false, 3000);
      }
    });
  }

  // Selección de sede
  selectDestinatario(email: string) {
    this.destinatario = email;
    console.log('Destinatario seleccionado:', this.destinatario);
  }

  // Volver a la selección inicial
  back() {
    this.destinatario = null;
    this.contactData = { name: '', email: '', message: '' };
    this.sending = false;
    this.error = false;
  }

  // Envío de correo con EmailJS
  sendEmail() {
    if (!this.destinatario) return;

    this.sending = true;
    this.error = false;

    const templateParams = {
      to_email: this.destinatario,             // correo del gremio
      from_name: this.contactData.name,        // nombre del usuario
      from_email: this.contactData.email,      // correo del usuario
      message: this.contactData.message        // mensaje
    };

    console.log('Enviando correo con params:', templateParams);

    emailjs.send(this.serviceID, this.templateID, templateParams, this.publicKey)
      .then(() => {
        this.sending = false;
        this.showSuccessAlert = true;
        console.log('✅ Correo enviado correctamente');
        setTimeout(() => this.back(), 3000);   // reset del formulario
      }, (err) => {
        console.error('❌ Error enviando correo:', err);
        this.sending = false;
        this.error = true;
      });
  }
}
