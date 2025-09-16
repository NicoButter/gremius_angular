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

  // Tus IDs de EmailJS
  private serviceID = 'service_ck9nnbd';
  private templateRioID = 'template_wluyfpg';
  private templateCaletaID = 'template_8e3q3cm';
  private publicKey = 'user_zzz'; // reemplazá con tu public key real

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params['success'] === 'true') {
        this.showSuccessAlert = true;
        setTimeout(() => this.showSuccessAlert = false, 3000);
      }
    });
  }

  selectDestinatario(email: string) {
    this.destinatario = email;
    console.log('Destinatario seleccionado:', this.destinatario);
  }

  back() {
    this.destinatario = null;
    this.contactData = { name: '', email: '', message: '' };
    this.sending = false;
    this.error = false;
  }

  sendEmail() {
    if (!this.destinatario) return;

    this.sending = true;
    this.error = false;

    // Elegir template según destinatario
    let templateID = '';
    if (this.destinatario === 'gremiojudicialesrg@gmail.com') {
      templateID = this.templateRioID;
    } else if (this.destinatario === 'empleadosjudiciales3dejulio@hotmail.com') {
      templateID = this.templateCaletaID;
    }

    const templateParams = {
      from_name: this.contactData.name,
      from_email: this.contactData.email,
      message: this.contactData.message
    };

    console.log('Enviando correo con params:', templateParams);

    emailjs.send(this.serviceID, templateID, templateParams, this.publicKey)
      .then(() => {
        this.sending = false;
        this.showSuccessAlert = true;
        setTimeout(() => this.back(), 3000);
      })
      .catch(err => {
        console.error('Error enviando correo:', err);
        this.sending = false;
        this.error = true;
      });
  }
}
