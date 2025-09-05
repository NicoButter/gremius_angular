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
    titulo: 'Encuentro de Mujeres y Diversidades – El Calafate 2025',
    organizador: 'Judiciales Santa Cruz',
    ciudad: 'El Calafate',
    fechas: [
      'Viernes 7 de noviembre de 2025',
      'Sábado 8 de noviembre de 2025'
    ],
    descripcion: `Este encuentro será un espacio de reflexión, intercambio y construcción colectiva,
                  pensado para fortalecer nuestra organización, compartir experiencias y seguir ampliando derechos.`,
    inscripcion: 'Próximamente se abrirán las inscripciones, para que todas las compañeras y diversidades puedan sumarse a esta instancia de participación.'
  };
}