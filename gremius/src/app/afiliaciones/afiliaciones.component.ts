import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-afiliaciones',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './afiliaciones.component.html',
  styleUrls: ['./afiliaciones.component.css']
})
export class AfiliacionesComponent implements OnInit {
  destinatario: string | null = null;
  afiliacionData = { nombre: '', email: '', dni: '', telefono: '', mensaje: '' };
  destinatarios = [
    { label: 'Sede Río Gallegos - El Calafate', email: 'gremiojudicialesrg@gmail.com' },
    { label: 'Sede San Julián - Caleta Olivia', email: 'empleadosjudiciales3dejulio@hotmail.com' }
  ];
  showSuccessAlert = false;

  // 🔹 propiedad para guardar la URL actual
  currentUrl = window.location.href;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params['success'] === 'true') {
        this.showSuccessAlert = true;
        setTimeout(() => {
          this.showSuccessAlert = false;
          this.resetForm();
        }, 3000);
      }
    });
  }

  selectDestinatario(email: string) {
    this.destinatario = email;
  }

  resetForm() {
    this.destinatario = null;
    this.afiliacionData = { nombre: '', email: '', dni: '', telefono: '', mensaje: '' };
  }

  get formAction(): string {
    return this.destinatario ? `https://formsubmit.co/${this.destinatario}` : '';
  }
}
