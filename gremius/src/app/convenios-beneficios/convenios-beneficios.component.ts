import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-convenios-beneficios',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './convenios-beneficios.component.html',
  styleUrls: ['./convenios-beneficios.component.css']
})
export class ConveniosBeneficiosComponent {
  convenios = [
    {
      nombre: 'EL TABLÓN - Parrilla',
      nuevo: true,
      profesion: 'Parrilla',
      direccion: 'Sarmiento 337, Río Gallegos',
      telefono: '0296 631-5502',
      descuento: 'Descuentos del 15% sobre el total del consumo realizado para almuerzos o cenas sin límite de monto. No acumulable con otras promociones.',
      imagen: 'assets/images/foto-el-tablon.png',
    }
    // los demas convenios
  ];
}
