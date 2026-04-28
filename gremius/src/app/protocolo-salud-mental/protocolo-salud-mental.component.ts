import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-protocolo-salud-mental',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './protocolo-salud-mental.component.html',
  styleUrl: './protocolo-salud-mental.component.css'
})
export class ProtocoloSaludMentalComponent {
  protocoloDetails = {
    title: 'Protocolo de Salud Mental y Consumos Problemáticos',
    intro: 'Conocé los alcances de este protocolo institucional, su enfoque preventivo y el rol clave que tuvo el gremio en su impulso.',
    items: [
      'Capacitaciones para equipos de trabajo.',
      'Redes de apoyo institucional.',
      'Derivaciones médicas y psicológicas.',
      'Acciones para la reinserción laboral digna y libre de estigmatización.'
    ],
    pdfUrl: 'assets/docs/protocolo_problemas_salud_mental_consumo.pdf'
  };
}
