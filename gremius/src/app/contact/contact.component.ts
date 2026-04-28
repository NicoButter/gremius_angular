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

  faqs = [
    { q: '¿Qué puedo consultar?', a: 'Podés escribirnos por reservas, beneficios o consultas administrativas.' },
    { q: '¿Si no soy afiliado/a puedo alquilar el Quincho o cabañas del Gremio?', a: 'Sí, hace tu consulta y te informamos las condiciones.' },
    { q: '¿En qué localidades el gremio tiene alojamiento propio?', a: 'Actualmente contamos con alojamiento en Río Gallegos, Caleta Olivia, San Julián y El Calafate.' },
    { q: '¿Cómo hago para afiliarme al gremio?', a: 'Tenes que trabajar para el Poder Judicial de Santa Cruz. Completa la Pre carga del formulario de afiliación en la web y te contactaremos para que acerques a tu sede más cercana, o consultanos por mail para recibir asistencia.' },
    { q: '¿Qué beneficios tengo como afiliado/a?', a: 'Accedés a turismo social, capacitaciones, asesoramiento gremial y distintos convenios.' },
    { q: '¿Cómo reservo una cabaña o departamento?', a: 'Las reservas se realizan escribiendo a la sede correspondiente o si sos afiliado/a a través de la app “Mi Credencial”.' },
    { q: '¿Cuánto tardan en responder?', a: 'Generalmente dentro de las 48 hs hábiles. Atención: lunes a viernes de 9:00 a 12:00 y 16:00 a 19:00.' },
    { q: '¿Dónde encuentro información sobre el sistema salarial y paritarias?', a: 'En la sección Utilidades, donde también podés consultar derechos laborales y sindicales.' },
    { q: '¿Cómo me inscribo en capacitaciones?', a: 'Podés anotarte desde la sección Capacitaciones de la web o enviando un mensaje a tu sede.' },
    { q: '¿Si soy contratado/a por el Poder Judicial de la Provincia de Santa Cruz, me puedo afiliar?', a: 'Sí, podés afiliarte al gremio.' }
  ];

  sending = false;
  showSuccessAlert = false;
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
      })
      .catch(err => {
        console.error('❌ Error enviando correo:', err);
        this.sending = false;
        this.error = true;
      });
  }
}
