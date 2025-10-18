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
    descripcion: '',
    //logoUrl: 'assets/images/logo_gremio_jubilados_judiciales.webp',
    sedeUrl: 'assets/images/logo_gremio_jubilados_judiciales.webp',
    extras: [
      { titulo: '', texto: '' },
      { titulo: '', texto: '' },
      { titulo: '', texto: '' }
    ]
  };
}