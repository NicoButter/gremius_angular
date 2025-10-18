import { Component, OnInit, OnDestroy, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('radioPlayer') radioPlayer!: ElementRef<HTMLAudioElement>;

  noticias = [
    {
      titulo: 'Gran sorteo en vivo - Día del Empleado Judicial',
      descripcion: 'Fecha: 3 de noviembre del 2025. Hora: 15:00. Lugar: Sede Ramon y Cajal 257 (Antes Escribano Público). ¡No te lo pierdas!',
      image: '/assets/images/sorteo_dia_empleado_judicial.png',
      autor: 'Equipo de Comunicación'
    },
    {
      titulo: 'La Justicia se mejora con formación y compromiso',
      descripcion: 'Reunión junto al Dr. Miguel Berri (Decano), Dra. Valeria Moreno (Secretaria Académica) y Dr. Alejandro Batista (Prosecretario de Políticas Digitales) de la Facultad de Ciencias Jurídicas y Sociales - UNLP. Trabajamos para brindar más calidad y herramientas a nuestros compañeros y compañeras judiciales.',
      image: '/assets/images/encuentro_la_plata_universidad.jpeg',
      autor: 'Equipo de Comunicación'
    },
    {
      titulo: 'Univesidad de La Plata',
      descripcion: 'Exitoso encuentro con el reconocido abogado Alejandro Batista en La Plata para capacitar al Poder Judicial de Santa Cruz en las últimas tecnologías legales y modernización de procesos judiciales y acuerdos para carreas de grado y postgrado',
      image: '/assets/images/reunion_universidad.png',
      autor: 'Equipo de Prensa'
    },
    {
      titulo: 'Encuentro De Mujeres y Diversidades',
      descripcion: 'Este encuentro será un espacio de reflexión, intercambio y construcción colectiva, pensado para fortalecer la organización, compartir experiencias y seguir ampliando derechos. 07 y 08 de noviembre. Fecha Límite de Inscripciónantes del 24 de octubre. ',

      image: '/assets/images/encuentro_mujeres_calafate_2025.png',
      autor: 'Equipo de Comunicación'
    },
    {
      titulo: 'Estrenamos Página WEB!!',
      descripcion: 'Aquí vas a encontrar la historia de nuestro gremio, las últimas noticias, información sobre actividades, convenios, comunicados oficiales y mucho más.',
      image: '/assets/images/nueva_pagina_web_1.png',
      autor: 'Equipo IT.'
    },
    {
      titulo: 'Reunión con el Intendente de Puerto Madryn',
      descripcion: 'Se gestionó un terreno destinado a los/as judiciales de Santa Cruz, con el objetivo de mejorar la infraestructura y brindar más espacios de uso gremial.',
      image: '/assets/images/solicitud_terreno_madryn.png',
      autor: 'Equipo de Comunicación'
    },
    {
      titulo: 'Fiesta Judicial 2025',
      descripcion: '¡No te pierdas la gran Fiesta Judicial 2025! Sorteos con importantes premios, banda en vivo y opciones de menú para celíacos y vegetarianos. Día 15 de noviembre de 2025, 21:00 hs.',
      image: '/assets/images/fiesta_judicial_2025.png',
      autor: 'Equipo de Comunicación'
    },
    {
      titulo: 'Nueva obra en Puerto Deseado: Quincho de 200 m²',
      descripcion: 'Se encuentra en ejecución la primera etapa del quincho de 200 m² en Puerto Deseado',
      image: '/assets/images/flyer_obra_puerto_deseado.png',
      autor: 'Equipo de Obras Públicas'
    },
    {
      titulo: 'Comunicado del Frente Sindical de Santa Cruz',
      descripcion: 'Desde el movimiento obrero nos solidarizamos con la justa lucha de los docentes organizados en la ADoSaC, y exigimos que se deje sin efecto la citada multa y cesen las acciones de carácter antisindical.',
      image: '/assets/images/reclamo_frente_sindical_hero.png',
      autor: 'Equipo de Prensa'
    },
    {
      titulo: 'FEDERACIÓN JUDICIAL ARGENTINA - COMUNICADO',
      descripcion: 'DECLARACIÓN DE LA FJA ANTE LA INICIATIVA DEL GOBIERNO DE SANTA CRUZ DE AMPLIAR INJUSTIFICADAMENTE LA COMPOSICIÓN DEL TSJ',
      image: '/assets/images/federacion_judicial_argentina_hero.png',
      autor: 'Equipo de Comunicación'
    }
    // {
    //   titulo: 'Reunión con el ministro de trabajo',
    //   descripcion: 'Se acordó una mesa de diálogo para el mes de julio.',
    //   image: '/assets/images/hero_2.jpg',
    //   autor: 'Secretaría del Gremio'
    // },
    // {
    //   titulo: 'Marcha en Río Gallegos',
    //   descripcion: 'Gran convocatoria frente al Tribunal Superior de Justicia.',
    //   image: '/assets/images/companieros_2024.png',
    //   autor: 'Corresponsal Local'
    // }
  ];

  currentSlide = 0;
  private intervalId: any;

  ngOnInit(): void {
    if (typeof window !== 'undefined') {
      this.intervalId = setInterval(() => {
        this.currentSlide = (this.currentSlide + 1) % this.noticias.length;
      }, 5000);
    }
  }

  ngAfterViewInit(): void {
    if (this.radioPlayer) {
      const player = this.radioPlayer.nativeElement;
      player.addEventListener('loadedmetadata', () => {
        try {
          if (player.seekable.length > 0) {
            player.currentTime = player.seekable.end(0);
          }
        } catch (e) {
          console.warn('No se pudo ajustar el tiempo del stream', e);
        }
      });
    }
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  goToSlide(index: number): void {
    this.currentSlide = index;
  }
}
