import { Component } from '@angular/core';

@Component({
  selector: 'app-encuentro-mujeres-diversidades',
  standalone: true,
  imports: [],
  templateUrl: './encuentro-mujeres-diversidades.component.html',
  styleUrl: './encuentro-mujeres-diversidades.component.css'
})
export class EncuentroMujeresDiversidadsComponent {
  evento = {
    titulo: 'Encuentro Provincial de Mujeres y Diversidades 2026',
    organizador: 'Gremio Santa Cruz',
    ciudad: 'Caleta Olivia',
    fechas: [
      'Viernes 23 de octubre de 2026',
      'Sábado 24 de octubre de 2026',
      'Domingo 25 de octubre de 2026'
    ],
    descripcion: 'Tres jornadas de encuentro, reflexión, formación e intercambio de experiencias.',
    inscripcion: 'Fecha límite de inscripción: 25/09/2026. Sin excepción.'
  };
}
