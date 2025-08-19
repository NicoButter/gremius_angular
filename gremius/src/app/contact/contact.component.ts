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
    { label: 'Gremio Judiciales Río Gallegos', email: 'gremiojudicialesrg@gmail.com' },
    { label: 'Gremio Judiciales San Julián', email: 'empleadosjudiciales3dejulio@hotmail.com' }
  ];
  showSuccessAlert = false;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // Check for 'success' query parameter on page load
    this.route.queryParams.subscribe(params => {
      if (params['success'] === 'true') {
        this.showSuccessAlert = true;
        setTimeout(() => {
          this.showSuccessAlert = false;
          this.back(); // Reset form after showing alert
        }, 3000); // Hide alert after 3 seconds
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
}