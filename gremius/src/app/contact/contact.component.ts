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
  selectedTemplateID: string | null = null;
  contactData = { name: '', email: '', message: '' };
  destinatarios = [
    { label: 'Gremio Judiciales Río Gallegos - El Calafate', email: 'gremiojudicialesrg@gmail.com', templateID: 'template_wluyfpg' },
    { label: 'Gremio Judiciales San Julián - Caleta Olivia', email: 'empleadosjudiciales3dejulio@hotmail.com', templateID: 'template_8e3q3cm' }
  ];

  showSuccessAlert = false;
  sending = false;
  error = false;

  private serviceID = 'service_ck9nnbd';
  private publicKey = 'cd4j8Dqisx59BKdag';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params['success'] === 'true') {
        this.showSuccessAlert = true;
        setTimeout(() => this.showSuccessAlert = false, 3000);
      }
    });
  }

  selectDestinatario(dest: any) {
    this.destinatario = dest.email;
    this.selectedTemplateID = dest.templateID;
    console.log('Destinatario seleccionado:', this.destinatario);
  }

  back() {
    this.destinatario = null;
    this.selectedTemplateID = null;
    this.contactData = { name: '', email: '', message: '' };
    this.sending = false;
    this.error = false;
  }

  sendEmail() {
    if (!this.destinatario || !this.selectedTemplateID) return;

    this.sending = true;
    this.error = false;

    const templateParams = {
      to_email: this.destinatario,
      from_name: this.contactData.name,
      from_email: this.contactData.email,
      message: this.contactData.message
    };

    emailjs.send(this.serviceID, this.selectedTemplateID, templateParams, this.publicKey)
      .then(() => {
        this.sending = false;
        this.showSuccessAlert = true;
        setTimeout(() => this.back(), 3000);
      }, (err) => {
        console.error('❌ Error enviando correo:', err);
        this.sending = false;
        this.error = true;
      });
  }
}
