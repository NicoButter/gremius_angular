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
    lead: 'Veinte años construyendo un espacio de solidaridad, cultura y recreación para nuestros jubilados y pensionados.',
    sedeUrl: 'assets/images/logo_gremio_jubilados_judiciales.webp',
    historia: [
      'Hace 20 años, un 3 de febrero de 2005, un grupo de jubilados judiciales con inquietudes y sueños compartidos decidió reunirse por primera vez para dar forma al Centro de Jubilados y Pensionados del Poder Judicial.',
      'Desde aquel inicio, quedó establecido que podrían ser socios los empleados, magistrados y funcionarios jubilados del Poder Judicial.'
    ],
    comisionConstitutiva: {
      titulo: 'Comisión Directiva Constitutiva',
      subtitulo: 'El 1º de marzo de 2005 se celebró la Asamblea Constitutiva, conformándose la primera Comisión Directiva:',
      miembros: [
        { cargo: 'Presidenta', nombre: 'Alicia Inés Troncoso' },
        { cargo: 'Secretaria', nombre: 'Alicia María Gómez' },
        { cargo: 'Tesorera', nombre: 'María Cristina Mirol' },
        { cargo: 'Vocal 1ª', nombre: 'Mónica Susana García' },
        { cargo: 'Vocal 2ª', nombre: 'Hilda del Carmen Cárdenas' },
        { cargo: 'Vocal 3ª', nombre: 'Adriana Rosa Dileva' }
      ]
    },
    suplentes: [
      'Sara de las Mercedes Vera',
      'María Cristina Segovia',
      'Mabel Sáez'
    ],
    revisoraCuentas: [
      'Juana Palmira Núñez',
      'Ana Elisa Medina'
    ],
    revisoraCuentasSuplentes: [
      'María Teresa Gaberty',
      'Elisa del Rosario Trevisan'
    ],
    mision: 'fortalecer la solidaridad, y promover actividades sociales, culturales y recreativas que nos mantengan unidos y activos',
    logros: [
      'Hoy, dos décadas después, celebramos con orgullo un logro colectivo: nuestro propio edificio, ubicado en las calles Richieri y Maipú.',
      'La sede social y el salón quincho son fruto del esfuerzo y compromiso de todos nuestros asociados, más allá de las distintas comisiones que fueron parte de esta historia.',
      'Este espacio no es solo ladrillos y paredes: es la casa común que construimos entre todos, símbolo de veinte años de trabajo, unión y pertenencia.'
    ]
  };
}
