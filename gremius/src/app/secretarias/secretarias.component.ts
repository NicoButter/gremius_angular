import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-secretarias',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './secretarias.component.html',
  styleUrl: './secretarias.component.css'
})
export class SecretariasComponent {
  secretarias = [
    {
      titulo: 'Secretaría General',
      icono: 'fa-solid fa-users-gear',
      funciones: [
        'Representa legal y políticamente al sindicato.',
        'Convoca y preside reuniones de la Comisión Directiva y las asambleas.',
        'Ejecuta las decisiones tomadas por los órganos del sindicato.',
        'Firma la documentación oficial junto a la Secretaría de Actas o la de Finanzas.',
        'Tiene a su cargo la coordinación general de todas las áreas.'
      ]
    },
    {
      titulo: 'Secretaría Adjunta',
      icono: 'fa-solid fa-handshake-angle',
      funciones: [
        'Asiste a la Secretaría General y la reemplaza en caso de ausencia o impedimento.',
        'Participa en la gestión y coordinación de todas las secretarías.',
        'Colabora en la ejecución de políticas gremiales.'
      ]
    },
    {
      titulo: 'Secretaría Gremial',
      icono: 'fa-solid fa-scale-balanced',
      funciones: [
        'Atiende los conflictos laborales individuales y colectivos.',
        'Coordina la acción gremial en los lugares de trabajo.',
        'Mantiene contacto permanente con delegados/as.',
        'Participa en negociaciones paritarias y en la defensa de condiciones laborales.'
      ]
    },
    {
      titulo: 'Secretaría de Administración y Actas',
      icono: 'fa-solid fa-file-signature',
      funciones: [
        'Lleva los libros de actas y registros oficiales del sindicato.',
        'Redacta y certifica las actas de reuniones y asambleas.',
        'Resguarda la documentación institucional.',
        'Firma actas junto a la Secretaría General.'
      ]
    },
    {
      titulo: 'Secretaría de Prensa y Difusión',
      icono: 'fa-solid fa-bullhorn',
      funciones: [
        'Elabora comunicados y notas institucionales.',
        'Maneja la imagen pública del sindicato.',
        'Administra redes sociales, sitio web y otros canales de comunicación.',
        'Difunde las actividades, logros y reclamos gremiales.'
      ]
    },
    {
      titulo: 'Secretaría de Organización',
      icono: 'fa-solid fa-sitemap',
      funciones: [
        'Planifica y ejecuta las campañas gremiales.',
        'Coordina la logística de actividades del sindicato (asambleas, elecciones, eventos).',
        'Colabora con la Secretaría Gremial en la articulación con delegados/as.',
        'Supervisa el cumplimiento del estatuto en la vida institucional.'
      ]
    },
    {
      titulo: 'Secretaría de Finanzas',
      icono: 'fa-solid fa-chart-line',
      funciones: [
        'Administra los fondos del sindicato.',
        'Lleva los libros contables y el control de ingresos y egresos.',
        'Presenta balances y estados financieros.',
        'Firma cheques junto a la Secretaría General.',
        'Propone presupuestos y proyectos de inversión.'
      ]
    },
    {
      titulo: 'Secretaría de Acción Social',
      icono: 'fa-solid fa-hand-holding-heart',
      funciones: [
        'Desarrolla políticas de contención social para afiliados/as.',
        'Administra beneficios solidarios: ayudas económicas, subsidios, turismo, etc.',
        'Diseña actividades recreativas, culturales y de apoyo a las familias judiciales.',
        'Atiende necesidades sociales urgentes.'
      ]
    },
    {
      titulo: 'Secretaría de Derechos Humanos',
      icono: 'fa-solid fa-hand-fist',
      funciones: [
        'Promueve el respeto por los derechos humanos dentro y fuera del ámbito laboral.',
        'Actúa frente a situaciones de violencia institucional, discriminación o abuso.',
        'Fomenta la memoria, verdad y justicia en clave sindical.',
        'Puede articular con organismos de DD.HH. provinciales o nacionales.'
      ]
    },
    {
      titulo: 'Secretaría de Capacitación Laboral y Gremial',
      icono: 'fa-solid fa-chalkboard-user',
      funciones: [
        'Diseña e implementa programas de formación para afiliados/as.',
        'Impulsa espacios de debate, reflexión y profesionalización sindical.',
        'Promueve la carrera judicial y la formación continua.',
        'Coordina convenios con universidades e institutos.'
      ]
    }
  ];
}
