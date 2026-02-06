import { Component, ElementRef, ViewChild, AfterViewInit, HostListener, OnDestroy } from '@angular/core';
import { NgIf, NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-actualidad',
  standalone: true,
  imports: [NgIf, NgFor, RouterLink],
  templateUrl: './actualidad.component.html',
  styleUrls: ['./actualidad.component.css', './carrusel.css']
})
export class ActualidadComponent implements AfterViewInit, OnDestroy {
  plataforma: 'android' | 'ios' = 'android';
  modalActivo = false;
  imagenModal = '';
  tituloModal = '';
  textoModal = '';

  // Carrusel - Ley Laboral
  imagenesCarrusel = [
    'assets/images/carrousel-ley-laboral/placa_1.png',
    'assets/images/carrousel-ley-laboral/placa_2.png',
    'assets/images/carrousel-ley-laboral/placa_3.png',
    'assets/images/carrousel-ley-laboral/placa_4.png',
    'assets/images/carrousel-ley-laboral/placa_5.png',
    'assets/images/carrousel-ley-laboral/placa_6.png',
    'assets/images/carrousel-ley-laboral/placa_7.png'
  ];
  
  textosCarrusel = [
    {
      titulo: 'YA EMPEZÓ: ESTAMOS PERDIENDO DERECHOS',
      contenido: 'Ley Bases + "Modernización Laboral". No son medidas aisladas. Es un proceso.'
    },
    {
      titulo: 'Con la LEY BASES ya se avanzó:',
      contenido: '• Indemnización reemplazada por un fondo.\n• Más período de prueba.\n• Despido más fácil.\n• Menos herramientas para reclamar.\n• Más trabajo precario y encubierto.'
    },
    {
      titulo: 'Ahora quieren avanzar con la "MODERNIZACIÓN LABORAL":',
      contenido: '• Convenios colectivos más débiles.\n• Negociar por empresa y dividir a los trabajadores.\n• Limitar la organización y la huelga.\n• Ajustar sobre el salario y la estabilidad.'
    },
    {
      titulo: 'Pero esto no impacta solo en el empleo.',
      contenido: 'TAMBIÉN AFECTA TU SALUD Y TU JUBILACIÓN'
    },
    {
      titulo: 'Más trabajo precario significa:',
      contenido: '• Menos aportes.\n• Menos financiamiento.\n• Menos recursos para obras sociales.\n• Menos recursos para las cajas de previsión.'
    },
    {
      titulo: 'Sin empleo estable no hay sistema que se sostenga.',
      contenido: 'Ni obra social fuerte. Ni jubilación digna.'
    },
    {
      titulo: 'No es modernización. Es precarización.',
      contenido: 'No es una medida aislada. Es un proceso de pérdida de derechos.\n\nLa pregunta es simple: ¿Queremos seguir perdiendo? ¿Volver al siglo XIX?\n\nPor eso decimos que no a esta reforma laboral. Porque no pierde el sindicato. Perdés vos.'
    }
  ];
  
  indiceCarrusel = 0;

  // Propiedades para el zoom y arrastre
  @ViewChild('contenedorRef') contenedorRef!: ElementRef;
  escala = 1;
  escalaMinima = 0.5;
  escalaMaxima = 3;
  offsetHorizontal = 0; // Para movimiento horizontal
  offsetVertical = 0; // Para movimiento vertical
  arrastrando = false;
  puntoInicioX = 0; // Posición X inicial del arrastre
  puntoInicioY = 0; // Posición Y inicial del arrastre
  anchoImagenOriginal = 0;
  altoImagenOriginal = 0;
  anchoContenedor = 0;
  altoContenedor = 0;

  // Referencia para el indicador de zoom
  private zoomIndicator: HTMLElement | null = null;
  private timeoutZoomIndicator: any = null;

  constructor(private sanitizer: DomSanitizer) {}

  cambiarPlataforma(plataforma: 'android' | 'ios') {
    this.plataforma = plataforma;
  }

  getContenidoCarrusel(): SafeHtml {
    const contenido = this.textosCarrusel[this.indiceCarrusel].contenido;
    const html = contenido.replace(/\n/g, '<br>');
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }

  anteriorCarrusel() {
    this.indiceCarrusel = this.indiceCarrusel > 0 ? this.indiceCarrusel - 1 : this.imagenesCarrusel.length - 1;
  }

  siguienteCarrusel() {
    this.indiceCarrusel = this.indiceCarrusel < this.imagenesCarrusel.length - 1 ? this.indiceCarrusel + 1 : 0;
  }

  abrirModal(imagen: string, titulo: string, texto: string) {
    this.imagenModal = imagen;
    this.tituloModal = titulo;
    this.textoModal = texto;
    this.modalActivo = true;
    this.escala = 1;
    this.offsetHorizontal = 0;
    this.offsetVertical = 0;
    this.arrastrando = false;

    // Prevenir scroll del body cuando el modal está activo
    document.body.style.overflow = 'hidden';

    // Crear indicador de zoom si no existe
    this.crearIndicadorZoom();

    // Esperar un momento para calcular dimensiones
    setTimeout(() => {
      this.calcularDimensiones();
    }, 100);
  }

  cerrarModal(event: MouseEvent) {
    event.stopPropagation();
    this.modalActivo = false;
    // Restaurar scroll del body
    document.body.style.overflow = 'auto';

    // Ocultar indicador de zoom
    this.ocultarIndicadorZoom();
  }

  ngAfterViewInit() {
    // Agregar listener para tecla Escape
    document.addEventListener('keydown', this.escucharTeclaEscape.bind(this));
  }

  calcularDimensiones() {
    if (!this.contenedorRef || !this.modalActivo) return;

    const contenedor = this.contenedorRef.nativeElement;
    this.anchoContenedor = contenedor.offsetWidth;
    this.altoContenedor = contenedor.offsetHeight;

    // Centrar la imagen
    this.centrarImagen();
  }

  centrarImagen() {
    if (this.anchoImagenOriginal === 0 || this.altoImagenOriginal === 0) return;

    // Centrar tanto horizontal como verticalmente cuando no hay zoom
    if (this.escala <= 1) {
      this.offsetHorizontal = 0;
      this.offsetVertical = 0;
      return;
    }

    // Aplicar límites cuando hay zoom para que no se salga del contenedor
    this.aplicarLimites();
  }

  manejarZoom(event: WheelEvent) {
    event.preventDefault();

    // Guardar posición del mouse relativa al contenedor
    const rect = event.currentTarget as HTMLElement;
    const mouseX = event.clientX - rect.getBoundingClientRect().left;
    const mouseY = event.clientY - rect.getBoundingClientRect().top;

    // Calcular el centro del contenedor
    const centroX = this.anchoContenedor / 2;
    const centroY = this.altoContenedor / 2;

    // Determinar dirección del zoom
    const factorZoom = event.deltaY > 0 ? 0.9 : 1.1;
    const escalaAnterior = this.escala;
    const nuevaEscala = Math.min(Math.max(this.escala * factorZoom, this.escalaMinima), this.escalaMaxima);

    // Si la escala cambió, ajustar la posición para mantener el zoom centrado en el cursor
    if (nuevaEscala !== escalaAnterior && this.anchoImagenOriginal > 0 && this.altoImagenOriginal > 0) {
      const ratio = nuevaEscala / escalaAnterior;

      // Calcular el offset relativo al cursor
      const offsetMouseX = mouseX - centroX - this.offsetHorizontal;
      const offsetMouseY = mouseY - centroY - this.offsetVertical;

      // Ajustar los offsets para mantener el punto bajo el cursor
      this.offsetHorizontal = mouseX - centroX - (offsetMouseX * ratio);
      this.offsetVertical = mouseY - centroY - (offsetMouseY * ratio);
    }

    // Aplicar nueva escala
    this.escala = nuevaEscala;

    // Aplicar límites para mantener la imagen dentro del contenedor
    this.aplicarLimites();

    // Mostrar indicador de zoom
    this.mostrarIndicadorZoom();
  }

  iniciarArrastre(event: MouseEvent) {
    // Solo permitir arrastre si la imagen está ampliada
    if (this.escala <= 1) {
      return;
    }

    this.arrastrando = true;
    this.puntoInicioX = event.clientX;
    this.puntoInicioY = event.clientY;
    event.preventDefault();

    // Cambiar cursor
    const contenedor = this.contenedorRef.nativeElement;
    contenedor.style.cursor = 'grabbing';
  }

  moverImagen(event: MouseEvent) {
    if (this.arrastrando && this.escala > 1) {
      const deltaX = event.clientX - this.puntoInicioX;
      const deltaY = event.clientY - this.puntoInicioY;

      this.offsetHorizontal += deltaX;
      this.offsetVertical += deltaY;

      this.puntoInicioX = event.clientX;
      this.puntoInicioY = event.clientY;

      // Aplicar límites para que la imagen no se salga del contenedor
      this.aplicarLimites();
    }
  }

  aplicarLimites() {
    if (this.anchoImagenOriginal === 0 || this.altoImagenOriginal === 0) return;

    // Calcular dimensiones de la imagen escalada
    const anchoImagenEscalada = this.anchoImagenOriginal * this.escala;
    const altoImagenEscalada = this.altoImagenOriginal * this.escala;

    // Aplicar límites horizontales
    if (anchoImagenEscalada > this.anchoContenedor) {
      const maxOffsetX = (anchoImagenEscalada - this.anchoContenedor) / 2;
      this.offsetHorizontal = Math.max(-maxOffsetX, Math.min(maxOffsetX, this.offsetHorizontal));
    } else {
      // Si la imagen es más pequeña que el contenedor horizontalmente, mantenerla centrada
      this.offsetHorizontal = 0;
    }

    // Aplicar límites verticales
    if (altoImagenEscalada > this.altoContenedor) {
      const maxOffsetY = (altoImagenEscalada - this.altoContenedor) / 2;
      this.offsetVertical = Math.max(-maxOffsetY, Math.min(maxOffsetY, this.offsetVertical));
    } else {
      // Si la imagen es más pequeña que el contenedor verticalmente, mantenerla centrada
      this.offsetVertical = 0;
    }
  }

  finalizarArrastre() {
    this.arrastrando = false;

    // Restaurar cursor
    if (this.contenedorRef) {
      const contenedor = this.contenedorRef.nativeElement;
      contenedor.style.cursor = 'grab';
    }
  }

  crearIndicadorZoom() {
    // Eliminar indicador anterior si existe
    this.eliminarIndicadorZoom();

    // Crear nuevo indicador
    this.zoomIndicator = document.createElement('div');
    this.zoomIndicator.className = 'zoom-indicator';
    this.zoomIndicator.innerText = `Zoom: ${Math.round(this.escala * 100)}%`;
    document.querySelector('.modal-body')?.appendChild(this.zoomIndicator);
  }

  mostrarIndicadorZoom() {
    if (this.zoomIndicator) {
      this.zoomIndicator.innerText = `Zoom: ${Math.round(this.escala * 100)}%`;
      this.zoomIndicator.classList.add('visible');

      // Limpiar timeout anterior
      if (this.timeoutZoomIndicator) {
        clearTimeout(this.timeoutZoomIndicator);
      }

      // Ocultar después de 1 segundo de inactividad
      this.timeoutZoomIndicator = setTimeout(() => {
        this.ocultarIndicadorZoom();
      }, 1000);
    }
  }

  ocultarIndicadorZoom() {
    if (this.zoomIndicator) {
      this.zoomIndicator.classList.remove('visible');
    }
  }

  eliminarIndicadorZoom() {
    if (this.zoomIndicator && this.zoomIndicator.parentNode) {
      this.zoomIndicator.parentNode.removeChild(this.zoomIndicator);
      this.zoomIndicator = null;
    }
  }

  escucharTeclaEscape(event: KeyboardEvent) {
    if (event.key === 'Escape' && this.modalActivo) {
      this.cerrarModal(new MouseEvent('click'));
    }
  }

  // Reset zoom con doble click (opcional)
  @HostListener('document:dblclick', ['$event'])
  onDoubleClick(event: MouseEvent) {
    if (this.modalActivo) {
      const target = event.target as HTMLElement;
      if (target.closest('.modal-body')) {
        event.preventDefault();

        // Alternar entre zoom 1x y 2x
        if (this.escala === 1) {
          this.escala = 2;
          this.offsetHorizontal = 0;
          this.offsetVertical = 0;
          this.centrarImagen();
        } else {
          this.escala = 1;
          this.offsetHorizontal = 0;
          this.offsetVertical = 0;
          this.centrarImagen();
        }

        this.mostrarIndicadorZoom();
      }
    }
  }

  // Detectar cuando la imagen se carga para obtener sus dimensiones
  onImageLoad(event: Event) {
    const img = event.target as HTMLImageElement;
    this.anchoImagenOriginal = img.naturalWidth;
    this.altoImagenOriginal = img.naturalHeight;
    this.centrarImagen();
  }

  // Limpiar event listeners y elementos cuando el componente se destruye
  ngOnDestroy() {
    document.removeEventListener('keydown', this.escucharTeclaEscape);
    this.eliminarIndicadorZoom();
  }
}
