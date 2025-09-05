import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gremio-jubilados-judiciales',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gremio-jubilados-judiciales.component.html',
  styleUrl: './gremio-jubilados-judiciales.component.css'
})
export class GremioJubiladosJudicialesComponent {
  gremio = {
    titulo: 'Centro de Jubilados Judiciales "3 de Febrero"',
    descripcion: 'El Centro de Jubilados Judiciales de Santa Cruz "3 de Febrero" tiene como objetivo representar y acompañar a todos los compañeros y compañeras que han culminado su trayectoria laboral en el Poder Judicial, garantizando sus derechos y promoviendo espacios de encuentro y participación. Nuestra sede se encuentra en Maipú esquina Richieri, Río Gallegos.',
    logoUrl: 'assets/images/logo_gremio_jubilados_judiciales.png',
    sedeUrl: 'assets/images/gremio_jubilados_judiciales.png',
    extras: [
      { titulo: 'Misión', texto: 'Defender los derechos de los jubilados judiciales y fortalecer la comunidad.' },
      { titulo: 'Beneficios', texto: 'Información actualizada sobre jubilaciones, actividades recreativas y encuentros de integración.' },
      { titulo: 'Cómo sumarse', texto: 'Contactando al gremio en nuestra sede de Maipú esquina Richieri.' }
    ]
  };
}