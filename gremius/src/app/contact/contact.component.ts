import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  destinatario: string | null = null;
  contactData = { name: '', email: '', message: '' };
  destinatarios = [
    { label: 'Gremio Judiciales Río Gallegos', email: 'gremiojudicialesrg@gmail.com' },
    { label: 'Gremio Judiciales San Julián', email: 'empleadosjudiciales3dejulio@hotmail.com' }
  ];

  constructor(private contactService: ContactService) {
    this.contactService.destinatario$.subscribe(d => this.destinatario = d);
  }

  selectDestinatario(email: string) {
    this.contactService.setDestinatario(email);
  }

  back() {
    this.contactService.resetDestinatario();
  }

  sendMessage() {
    if (!this.destinatario) return;
    this.contactService.sendMessage(this.contactData, this.destinatario).subscribe({
      next: () => {
        alert('Mensaje enviado correctamente');
        this.close();
      },
      error: (err) => {
        console.error(err);
        alert('Error al enviar mensaje');
      }
    });
  }

  close() {
    this.contactService.resetDestinatario();
    this.contactData = { name: '', email: '', message: '' };
  }
}
