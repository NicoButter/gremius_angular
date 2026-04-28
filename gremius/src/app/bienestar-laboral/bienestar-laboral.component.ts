import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bienestar-laboral',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bienestar-laboral.component.html',
  styleUrl: './bienestar-laboral.component.css'
})
export class BienestarLaboralComponent {
  
  oficinaInfo = {
    title: '¿Qué es la Oficina de Bienestar Laboral (OBL)?',
    paragraphs: [
      'La Oficina de Bienestar Laboral (OBL) fue creada por el Tribunal Superior de Justicia de Santa Cruz como un espacio institucional para abordar situaciones de violencia y acoso en el ámbito laboral.',
      'Su objetivo es prevenir, intervenir y promover un ambiente de trabajo saludable, ofreciendo asesoramiento, contención y recomendaciones en casos que afecten la integridad física, psíquica o emocional de quienes integran el Poder Judicial.',
      'Esta oficina depende directamente del Tribunal y funciona con un equipo interdisciplinario que recibe consultas y denuncias. Sin embargo, no tiene facultades sancionatorias: sus actuaciones se limitan a informes o sugerencias, quedando las decisiones finales en manos de las autoridades judiciales.'
    ]
  };

  gremioInfo = {
    title: 'La mirada del gremio',
    paragraphs: [
      'Desde el sindicato consideramos que toda herramienta que busque mejorar el bienestar laboral es positiva. Pero también vemos que, en la práctica, muchos/as compañeros/as sienten que esta oficina no brinda respuestas reales: se hacen denuncias, se entregan informes, pero los conflictos siguen sin resolverse.',
      'Por eso queremos ser claros:'
    ],
    bulletPoints: [
      'Si el gremio no es convocado, no toma conocimiento de los casos.',
      'Te pedimos que, además de recurrir a la Oficina de Bienestar Laboral, acudas a tu gremio para ser acompañado/a y defendido/a de manera efectiva.'
    ],
    conclusion: 'La participación gremial es indispensable para garantizar que cada denuncia no quede en un trámite vacío, sino que se traduzca en soluciones concretas y en la defensa real de los derechos laborales.'
  };

}
