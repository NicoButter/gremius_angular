import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-delegados-afiliados',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './delegados-afiliados.component.html',
  styleUrls: ['./delegados-afiliados.component.css']
})
export class DelegadosAfiliadosComponent {
  
  delegados = {
    titulo: 'Delegados y Delegadas Gremiales',
    subtitulo: '¡La voz de cada oficina, juzgado o localidad!',
    descripcion: 'Los y las delegadas son elegidos por sus propios compañeros/as para ser el puente entre el sindicato y cada lugar de trabajo. Cumplen un rol fundamental en la defensa colectiva de nuestros derechos.',
    imagen: 'assets/images/afiliados_casa_de_gobierno.webp',
    funciones: [
      'Representar a sus compañeros/as ante la Comisión Directiva.',
      'Informar sobre problemáticas, propuestas o conflictos de su sector.',
      'Convocar y organizar asambleas locales.',
      'Participar en reuniones gremiales llevando la voz de su jurisdicción.',
      'Acompañar en situaciones laborales difíciles: sanciones, sumarios, traslados, etc.',
      'Fomentar la unidad y participación en las actividades del sindicato.'
    ],
    infoExtra: 'El mandato de los/as delegados/as es por tiempo determinado y pueden ser reelegidos/as.'
  };

  afiliados = {
    titulo: 'Ser Afiliado/a: Derechos y Compromisos',
    subtitulo: 'Afiliarse no es solo un trámite, es una decisión colectiva.',
    descripcion: 'Ser parte del sindicato significa construir juntos mejores condiciones laborales, salariales y de vida.',
    imagen: 'assets/images/afiliado_votando.webp',
    derechos: [
      'Votar en asambleas y elecciones.',
      'Postularse a cargos gremiales.',
      'Recibir asesoramiento y defensa gremial.',
      'Acceder a beneficios sociales, turísticos, solidarios y formativos.',
      'Participar de actividades, capacitaciones y encuentros.'
    ],
    compromisos: [
      'Cumplir con lo establecido en el estatuto.',
      'Contribuir con la cuota sindical.',
      'Participar activamente en las decisiones colectivas.',
      'Respetar las resoluciones democráticas del gremio.'
    ]
  };

  desafiliacion = {
    titulo: '¿Estás pensando en desafiliarte?',
    parrafos: [
      'Antes de tomar una decisión apresurada, recordá algo fundamental:',
      'La desafiliación debilita nuestra herramienta de lucha.',
      'Lo que no se logra individualmente, lo conseguimos colectivamente.',
      'Si algo no te convence, participá, proponé, construí. El sindicato es de todos y todas. Solo con más unidad y participación podemos lograr mejores conquistas.'
    ]
  };

  descargarEstatuto(): void {
    const link = document.createElement('a');
    link.href = 'assets/docs/estatuto.pdf';
    link.download = 'Estatuto_Gremio_Judicial.pdf';
    link.click();
  }
}
