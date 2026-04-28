import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-accion-social',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './accion-social.component.html',
  styleUrls: ['./accion-social.component.css']
})
export class AccionSocialComponent {
  requisitos = [
    'Ser afiliado con un mínimo de seis meses de antigüedad.',
    'Tiempo límite para acceder a cada subsidio: seis (6) meses.',
    'Subsidio por fallecimiento: aplica a hijos, hermanos y padres.',
    'Subsidio por derivación: corresponde al afiliado titular y descendientes.',
    'En todos los casos: enviar junto a la documentación, datos de CBU o Alias.'
  ];

  subsidios = [
    {
      titulo: 'Por Casamiento',
      icono: 'fa-solid fa-ring',
      valor: '$60.000',
      descripcion: 'Presentar nota en la sede gremial (Río Gallegos, Puerto San Julián, Caleta Olivia) de manera física y/o por mail, adjuntando certificado de matrimonio y copia del DNI.'
    },
    {
      titulo: 'Por Nacimiento',
      icono: 'fa-solid fa-baby-carriage',
      valor: '$60.000',
      descripcion: 'Presentar nota en la sede gremial de su localidad, adjuntando certificado de nacimiento y copias del DNI del titular y de su hija/o.'
    },
    {
      titulo: 'Por Fallecimiento',
      icono: 'fa-solid fa-ribbon',
      valor: '$60.000',
      descripcion: 'Presentar nota en la sede gremial de su localidad, adjuntando certificado de defunción y copias del DNI del titular y del difunto.'
    },
    {
      titulo: 'Por Derivación',
      icono: 'fa-solid fa-truck-medical',
      valor: '$80.000',
      descripcion: 'Presentar nota en la sede gremial de su localidad, adjuntando certificado de derivación y copia del DNI. Este beneficio sólo podrá ser solicitado dos veces al año.'
    }
  ];
}
