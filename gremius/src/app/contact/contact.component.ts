import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import emailjs from '@emailjs/browser';
import { CONTACT_CAMPAIGN } from './contact-campaign.config';
import { JobApplicationService } from '../services/job-application.service';

type ContactMode = 'general' | 'job_application';

interface ContactRecipient {
  id: string;
  label: string;
  email: string;
  templateID: string;
}

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
  jobApplicationData = { name: '', email: '', phone: '', message: '', honeypot: '' };
  cvFile: File | null = null;
  cvError = '';
  jobFormError = '';
  mode: ContactMode = 'general';

  readonly campaign = CONTACT_CAMPAIGN;

  destinatarios: ContactRecipient[] = [
    {
      id: 'rio-gallegos',
      label: 'Gremio Judiciales Río Gallegos - El Calafate',
      email: 'gremiojudicialesrg@gmail.com',
      templateID: 'template_wluyfpg'
    },
    {
      id: 'san-julian-caleta-olivia',
      label: 'Gremio Judiciales San Julián - Caleta Olivia',
      email: 'empleadosjudiciales3dejulio@hotmail.com',
      templateID: 'template_8e3q3cm'
    }
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
  showJobSuccessAlert = false;
  error = false;

  private serviceID = 'service_ck9nnbd';
  private publicKey = 'cd4j8Dqisx59BKdag';

  @ViewChild('jobCvInput') private jobCvInput?: ElementRef<HTMLInputElement>;

  constructor(
    private route: ActivatedRoute,
    private jobApplicationService: JobApplicationService
  ) {}

  get campaignEnabled(): boolean {
    return this.campaign.enabled;
  }

  get isJobApplication(): boolean {
    return this.mode === 'job_application';
  }

  get acceptedResumeExtensions(): string {
    return this.campaign.resume.allowedExtensions.map(extension => `.${extension}`).join(', ');
  }

  get cvFileName(): string {
    return this.cvFile?.name ?? '';
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params['success'] === 'true') {
        this.showSuccessAlert = true;
        setTimeout(() => this.showSuccessAlert = false, 3000);
      }
    });
  }

  selectDestinatario(dest: ContactRecipient): void {
    this.destinatario = dest.email;
    this.selectedTemplateID = dest.templateID;
  }

  startJobApplication(): void {
    if (!this.campaignEnabled || this.campaign.type !== 'job_application') return;

    const campaignRecipient = this.destinatarios.find(dest => dest.id === this.campaign.office);
    if (!campaignRecipient) {
      console.error('No hay una sede configurada para la campaña de contacto.');
      this.error = true;
      return;
    }

    this.mode = 'job_application';
    this.error = false;
    this.cvError = '';
    this.jobFormError = '';
    this.showJobSuccessAlert = false;
    this.selectDestinatario(campaignRecipient);
  }

  startGeneralConsultation(): void {
    this.back();
  }

  back(): void {
    this.mode = 'general';
    this.destinatario = null;
    this.selectedTemplateID = null;
    this.contactData = { name: '', email: '', message: '' };
    this.resetJobApplication();
    this.showJobSuccessAlert = false;
    this.sending = false;
    this.error = false;
  }

  onCvSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.item(0) ?? null;

    this.cvFile = null;
    this.cvError = '';
    this.jobFormError = '';

    if (!file) return;

    const extension = file.name.split('.').pop()?.toLowerCase();
    if (
      !extension ||
      !this.campaign.resume.allowedExtensions.includes(extension) ||
      file.type !== 'application/pdf'
    ) {
      this.cvError = 'El currículum debe estar en formato PDF.';
      input.value = '';
      return;
    }

    if (file.size > this.campaign.resume.maxSizeBytes) {
      this.cvError = 'El archivo supera el máximo permitido de 3 MB.';
      input.value = '';
      return;
    }

    this.cvFile = file;
  }

  sendEmail(): void {
    if (!this.destinatario || !this.selectedTemplateID) return;

    this.sending = true;
    this.error = false;

    const title = this.destinatarios.find(recipient => recipient.email === this.destinatario)?.label ?? 'Consulta general';
    const templateParams = {
      subject: `Contact Us: ${title}`,
      to_email: this.destinatario,
      from_name: this.contactData.name,
      from_email: this.contactData.email,
      name: this.contactData.name,
      email: this.contactData.email,
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

  sendJobApplication(form: NgForm): void {
    if (!this.isJobApplication || !this.campaignEnabled) return;

    this.jobFormError = '';
    this.showJobSuccessAlert = false;

    if (form.invalid) {
      this.jobFormError = 'Completá los campos obligatorios.';
      return;
    }

    if (!this.cvFile) {
      this.cvError = 'Debés seleccionar tu CV.';
      return;
    }

    this.sending = true;
    this.jobApplicationService.submit(this.campaign, {
      fullName: this.jobApplicationData.name,
      email: this.jobApplicationData.email,
      phone: this.jobApplicationData.phone,
      message: this.jobApplicationData.message,
      honeypot: this.jobApplicationData.honeypot
    }, this.cvFile)
      .then(() => {
        this.resetJobApplication();
        form.resetForm();
        this.showJobSuccessAlert = true;
      })
      .catch(() => {
        this.jobFormError = 'No pudimos enviar la postulación. Intentá nuevamente.';
      })
      .finally(() => {
        this.sending = false;
      });
  }

  private resetJobApplication(): void {
    this.jobApplicationData = { name: '', email: '', phone: '', message: '', honeypot: '' };
    this.cvFile = null;
    this.cvError = '';
    this.jobFormError = '';

    if (this.jobCvInput) {
      this.jobCvInput.nativeElement.value = '';
    }
  }
}
