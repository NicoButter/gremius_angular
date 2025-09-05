import { Component } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-actualidad',
  standalone: true,
  imports: [NgIf],
  templateUrl: './actualidad.component.html',
  styleUrls: ['./actualidad.component.css']  // <-- corregido
})
export class ActualidadComponent {
  plataforma: 'android' | 'ios' = 'android';

  cambiarPlataforma(plataforma: 'android' | 'ios') {
    this.plataforma = plataforma;
  }
}
