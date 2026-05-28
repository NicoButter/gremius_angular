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
  convenios: Array<{
    nombre: string;
    categoria: string;
    direccion: string;
    localidad: string;
    telefono: string;
    descuento: string;
    imagen: string;
    rubro: string;
    nuevo?: boolean;
  }> = [
    // ARTÍCULOS DE LIMPIEZA

    // ARTÍCULOS ELECTRÓNICOS

    // CAPACITACIONES

    // CARNICERÍA / ALMACÉN

    // CERRAJERÍA

    // COTILLÓN - BAZAR - BOUTIQUE - REGALOS
    {
      nombre: 'SALÓN DE BELLEZA CRISTINA',
      categoria: 'Estética - Barbería - Peluquerías',
      direccion: 'Lago Viedma y Antonio Rivero',
      localidad: 'Río Gallegos',
      telefono: '',
      descuento: '20% descuento en efectivo',
      imagen: '',
      rubro: 'Salud y Belleza',
    },
    {
      nombre: 'ZONA SALUD',
      categoria: 'Estética - Barbería - Peluquerías',
      direccion: 'Comodoro Rivadavia 280, Río Gallegos',
      localidad: 'Río Gallegos',
      telefono: '02966 651273 / 02966 755049',
      descuento: '10% descuento en efectivo',
      imagen: '',
      rubro: 'Salud y Belleza',
    },
    {
      nombre: 'AUTOFARMA',
      categoria: 'Farmacias',
      direccion: 'Av. Kirchner 1057',
      localidad: 'Río Gallegos',
      telefono: '',
      descuento: '10% descuento perfumería y regalería (no incluye medicamentos)',
      imagen: '',
      rubro: 'Salud y Belleza',
    },
    {
      nombre: 'LA FRANCO',
      categoria: 'Farmacias',
      direccion: 'Av. Gregores y Richieri - Av. Kirchner y 9 de Julio',
      localidad: 'Río Gallegos',
      telefono: '',
      descuento: '10% descuento perfumería y regalería (no incluye medicamentos)',
      imagen: '',
      rubro: 'Salud y Belleza',
    },
    {
      nombre: 'EL TABLÓN PARRILLA',
      categoria: 'Gastronomía - Pastelería - Almacenes',
      direccion: 'Sarmiento 337, Río Gallegos',
      localidad: 'Río Gallegos',
      telefono: '02966 315502',
      descuento: '15% efectivo',
      imagen: '',
      rubro: 'Gastronomía',
    },

    // HELADERÍAS

    // INDUMENTARIA
    {
      nombre: 'TÉ DE TILO',
      categoria: 'Indumentaria',
      direccion: 'Guttero 55, Caleta Olivia',
      localidad: 'Caleta Olivia',
      telefono: '',
      descuento: '15% en pago en efectivo y hasta 6 cuotas sin interés con tarjetas de crédito',
      imagen: '',
      rubro: 'Indumentaria',
    },
    {
      nombre: 'YAGMOUR',
      categoria: 'Indumentaria',
      direccion: 'Calle 9 de Julio 16, Río Gallegos',
      localidad: 'Río Gallegos',
      telefono: '02966 479463',
      descuento: '15% de descuento de lunes a miércoles',
      imagen: '',
      rubro: 'Indumentaria',
    },

    // INFORMÁTICA E INSUMOS
    {
      nombre: 'RFC',
      categoria: 'Informática e Insumos',
      direccion: 'Alberdi 573',
      localidad: 'Río Gallegos',
      telefono: '',
      descuento: '10% efectivo o 5% débito',
      imagen: '',
      rubro: 'Tecnología',
    },

    // JOYERÍAS
    {
      nombre: 'LOLA MORA',
      categoria: 'Joyerías',
      direccion: 'Av. Kirchner 915',
      localidad: 'Río Gallegos',
      telefono: '',
      descuento: '15% efectivo',
      imagen: '',
      rubro: 'Indumentaria',
    },
    {
      nombre: 'TEPPA JOYAS',
      categoria: 'Joyerías',
      direccion: 'Av. Kirchner 681',
      localidad: 'Río Gallegos',
      telefono: '',
      descuento: '20% efectivo o débito',
      imagen: '',
      rubro: 'Indumentaria',
    },

    // JUGUETERÍA
    {
      nombre: 'CASA TEPPA',
      categoria: 'Juguetería',
      direccion: 'Av. Kirchner 697',
      localidad: 'Río Gallegos',
      telefono: '',
      descuento: '20% efectivo o débito',
      imagen: '',
      rubro: 'Comercio',
    },

    // LIBRERÍA - PAPELERÍA
    {
      nombre: '=A4',
      categoria: 'Librería - Papelería',
      direccion: 'Av. Kirchner 1539',
      localidad: 'Río Gallegos',
      telefono: '',
      descuento: '20% efectivo, tarjeta 3 cuotas sin interés',
      imagen: '',
      rubro: 'Comercio',
    },
    {
      nombre: 'CAPIPE',
      categoria: 'Librería - Papelería',
      direccion: 'Av. Kirchner 1335',
      localidad: 'Río Gallegos',
      telefono: '',
      descuento: '10% efectivo o débito (no ofertas)',
      imagen: '',
      rubro: 'Comercio',
    },
    {
      nombre: 'EL MAYORAL',
      categoria: 'Librería - Papelería',
      direccion: 'Mariano Moreno 256',
      localidad: 'Río Gallegos',
      telefono: '',
      descuento: '10% efectivo o débito',
      imagen: '',
      rubro: 'Comercio',
    },
    {
      nombre: 'EL RELOJ',
      categoria: 'Librería - Papelería',
      direccion: 'Mitre 25',
      localidad: 'Río Gallegos',
      telefono: '',
      descuento: '10% efectivo, tarjeta 3 cuotas sin interés',
      imagen: '',
      rubro: 'Comercio',
    },
    {
      nombre: 'TODO PAPEL',
      categoria: 'Librería - Papelería',
      direccion: 'Don Bosco 140',
      localidad: 'Río Gallegos',
      telefono: '',
      descuento: '15% efectivo o débito',
      imagen: '',
      rubro: 'Comercio',
    },

    // MAYORISTAS
    {
      nombre: 'ACIDO RG',
      categoria: 'Mayoristas',
      direccion: 'Lisandro de la Torre 360',
      localidad: 'Río Gallegos',
      telefono: '',
      descuento: '10% todos los medios (no ofertas)',
      imagen: '',
      rubro: 'Comercio',
    },
    {
      nombre: 'CAPIPE',
      categoria: 'Mayoristas',
      direccion: 'Mariano Moreno 66',
      localidad: 'Río Gallegos',
      telefono: '',
      descuento: '13% efectivo o débito (no ofertas)',
      imagen: '',
      rubro: 'Comercio',
    },

    // MARMOLERÍA
    {
      nombre: 'VICTORIA',
      categoria: 'Marmolería',
      direccion: 'Mariano Moreno 269',
      localidad: 'Río Gallegos',
      telefono: '',
      descuento: 'Tarjetas 3 cuotas sin interés',
      imagen: '',
      rubro: 'Comercio',
    },

    // MERCERÍA
    {
      nombre: 'LA PRINCESA',
      categoria: 'Mercería',
      direccion: '25 de Mayo 92',
      localidad: 'Río Gallegos',
      telefono: '',
      descuento: '10% todos los medios',
      imagen: '',
      rubro: 'Comercio',
    },

    // NEUMÁTICOS / TALLER / LUBRICANTES
    {
      nombre: 'DHL. MECÁNICA EN GENERAL',
      categoria: 'Taller Mecánico',
      direccion: 'Cañadón Seco 75, Río Gallegos',
      localidad: 'Río Gallegos',
      telefono: '02966 658396',
      descuento: '20% para afiliados en mecánica y electricidad general. Daniel Horacio León.',
      imagen: '',
      rubro: 'Servicios',
    },
    {
      nombre: 'AUSTRAL GOMAS SRL.',
      categoria: 'Neumáticos / Taller / Lubricantes',
      direccion: 'Rivadavia 96',
      localidad: 'Río Gallegos',
      telefono: '',
      descuento: '20% descuento; tarjetas 3 y 6 cuotas sin interés',
      imagen: '',
      rubro: 'Servicios',
    },
    {
      nombre: 'CRUCECOR',
      categoria: 'Neumáticos / Taller / Lubricantes',
      direccion: 'Mariano Moreno 95',
      localidad: 'Río Gallegos',
      telefono: '',
      descuento: '10% efectivo',
      imagen: '',
      rubro: 'Servicios',
    },

    // ÓPTICAS
    {
      nombre: 'CENTRO ÓPTICO AUSTRAL',
      categoria: 'Ópticas',
      direccion: 'Zapiola 296',
      localidad: 'Río Gallegos',
      telefono: '',
      descuento: '10% efectivo, tarjeta 3 y 6 cuotas sin interés',
      imagen: '',
      rubro: 'Salud y Belleza',
    },
    {
      nombre: 'ÓPTICA GALLEGOS',
      categoria: 'Ópticas',
      direccion: 'España 58',
      localidad: 'Río Gallegos',
      telefono: '',
      descuento: '15% efectivo',
      imagen: '',
      rubro: 'Salud y Belleza',
    },

    // ORTOPEDIAS
    {
      nombre: 'OSTESUR. REHABILITACIÓN INTEGRAL',
      categoria: 'Rehabilitación',
      direccion: '',
      localidad: '',
      telefono: '02966 346222',
      descuento: '15% en Termobike, Acupuntura, Masajes, Auriculoterapia, Entrenamiento Funcional. 10% en coseguros de Obras Sociales para Kinesiología y Fisioterapia.',
      imagen: '',
      rubro: 'Salud y Belleza',
    },
    {
      nombre: 'DÍAZ VÉLEZ',
      categoria: 'Ortopedias',
      direccion: 'Perito Moreno 370',
      localidad: 'Río Gallegos',
      telefono: '',
      descuento: '15% efectivo',
      imagen: '',
      rubro: 'Salud y Belleza',
    },
    {
      nombre: 'INTEGRAL',
      categoria: 'Ortopedias',
      direccion: 'Errazuriz 36',
      localidad: 'Río Gallegos',
      telefono: '',
      descuento: '15% efectivo',
      imagen: '',
      rubro: 'Salud y Belleza',
    },

    // PANADERÍA
    {
      nombre: 'FRANOI',
      categoria: 'Panadería',
      direccion: 'Perito Moreno 189',
      localidad: 'Río Gallegos',
      telefono: '',
      descuento: '10% efectivo',
      imagen: '',
      rubro: 'Gastronomía',
    },

    // PERFUMERÍA - COSMÉTICA
    {
      nombre: 'LA SERENA',
      categoria: 'Perfumería - Cosmética',
      direccion: 'Av. Perón 815',
      localidad: 'Río Gallegos',
      telefono: '',
      descuento: '10% todos los medios',
      imagen: '',
      rubro: 'Salud y Belleza',
    },

    // PINTURERÍA
    {
      nombre: 'LA PINTURERÍA',
      categoria: 'Pinturería',
      direccion: 'Pellegrini 301',
      localidad: 'Río Gallegos',
      telefono: '',
      descuento: '15% efectivo',
      imagen: '',
      rubro: 'Comercio',
    },

    // POLARIZADOS
    {
      nombre: 'EVOLUTION FILMS',
      categoria: 'Polarizados',
      direccion: 'Hipólito Yrigoyen 725',
      localidad: 'Río Gallegos',
      telefono: '',
      descuento: '10% efectivo',
      imagen: '',
      rubro: 'Servicios',
    },
    {
      nombre: 'FULL CARS. TU AUTO TU ESTILO',
      categoria: 'Polarizados',
      direccion: 'Tucumán 330, Río Gallegos',
      localidad: 'Río Gallegos',
      telefono: '02966 417512',
      descuento: '20% en polarizados, tratamientos cerámicos, instalaciones de PPF, instalaciones de vinilos, gráficas y reparaciones de parabrisas',
      imagen: '',
      rubro: 'Servicios',
    },

    // SALÓN DE EVENTOS
    {
      nombre: 'HAPPY WORLD',
      categoria: 'Salón de Eventos',
      direccion: 'Magallanes 69',
      localidad: 'Río Gallegos',
      telefono: '02966 786021',
      descuento: '20% de descuento abonando en efectivo o transferencia',
      imagen: '',
      rubro: 'Servicios',
    },

    // SEGURIDAD
    {
      nombre: 'ROMERO SISTEMAS',
      categoria: 'Seguridad',
      direccion: 'Maipú 460',
      localidad: 'Río Gallegos',
      telefono: '',
      descuento: 'Condiciones preferenciales',
      imagen: '',
      rubro: 'Servicios',
    },

    // SEGUROS
    {
      nombre: 'BRUSA ASESORES DE SEGUROS',
      categoria: 'Seguros',
      direccion: 'España 384',
      localidad: 'Río Gallegos',
      telefono: '',
      descuento: 'Mejor propuesta garantizada',
      imagen: '',
      rubro: 'Servicios',
    },

    // SUPERMERCADOS - POLLERÍAS
    {
      nombre: 'AXION ENERGY',
      categoria: 'Estaciones de Servicio',
      direccion: 'Marcelino Alvarez esq. Posadas, Río Gallegos',
      localidad: 'Río Gallegos',
      telefono: '',
      descuento: '5% en compras de hasta $10.000 por operación con todos los medios de pago (excepto promociones de Axion Energy)',
      imagen: '',
      rubro: 'Servicios',
    },
    {
      nombre: 'DON ALDO',
      categoria: 'Supermercados - Pollerías',
      direccion: 'Alvear 1170 esq. Cepeda',
      localidad: 'Río Gallegos',
      telefono: '',
      descuento: '10% efectivo',
      imagen: '',
      rubro: 'Comercio',
    },
    {
      nombre: 'EL HUEVO Y LA GALLINA',
      categoria: 'Supermercados - Pollerías',
      direccion: 'Hernán Cortéz 817',
      localidad: 'Río Gallegos',
      telefono: '',
      descuento: '15% efectivo, 10% débito',
      imagen: '',
      rubro: 'Comercio',
    },
    {
      nombre: 'GREGORIO T. RODRÍGUEZ',
      categoria: 'Supermercados - Pollerías',
      direccion: 'Mariano Moreno 498 - Calle 13 entre 30 y 32',
      localidad: 'Río Gallegos',
      telefono: '',
      descuento: '5% todos los medios',
      imagen: '',
      rubro: 'Comercio',
    },
    {
      nombre: 'MARKET SUR AHORRO',
      categoria: 'Supermercados - Pollerías',
      direccion: 'Maipú 1215 (esq. Cepeda) / Policía de Territorio 531, Río Gallegos',
      localidad: 'Río Gallegos',
      telefono: '',
      descuento: '10% de descuento sobre compra final de productos. No acumulable con otras promociones vigentes',
      imagen: '',
      rubro: 'Comercio',
    },

    // TURISMO
    {
      nombre: 'DON FELIPE, APART',
      categoria: 'Turismo',
      direccion: 'Glaciar Spegazzini 48, El Calafate',
      localidad: 'El Calafate',
      telefono: '02966 346222',
      descuento: '15% con pago en efectivo, transferencia bancaria o débito',
      imagen: '',
      rubro: 'Turismo',
    },
    {
      nombre: 'MACA TOBIANO',
      categoria: 'Turismo',
      direccion: 'Contacto: reservas@macatobiano.com',
      localidad: '',
      telefono: '',
      descuento: '10% de descuento. Todos los medios de pago',
      imagen: '',
      rubro: 'Turismo',
    },
    {
      nombre: 'CAMPING ACA – PUERTO MADRYN',
      categoria: 'Turismo',
      direccion: 'Puerto Madryn',
      localidad: 'Puerto Madryn',
      telefono: '',
      descuento: '30% OFF – Temporada baja, 20% OFF – Temporada alta. Válido para afiliados y acompañantes en todas las modalidades de alojamiento. Sujeto a disponibilidad.',
      imagen: '',
      rubro: 'Turismo',
      nuevo: true,
    },
    {
      nombre: 'DAZZLER BY WYNDHAM',
      categoria: 'Turismo',
      direccion: '',
      localidad: '',
      telefono: '',
      descuento: '30% sobre tarifa standard (diciembre a agosto), 25% sobre tarifa standard (septiembre)',
      imagen: '',
      rubro: 'Turismo',
      nuevo: true,
    },
    {
      nombre: 'RAMADA RESIDENCES BY WYNDHAM',
      categoria: 'Turismo',
      direccion: 'Complejos: CQ Gales · CQ Mitre · CQ Parry, Puerto Madryn',
      localidad: 'Puerto Madryn',
      telefono: '',
      descuento: '30% OFF – Temporada baja, 20% OFF – Temporada alta. Para afiliados y acompañantes. Válido en las tres propiedades. Sujeto a disponibilidad.',
      imagen: '',
      rubro: 'Turismo',
      nuevo: true,
    },

    // ALMACENES - CONGELADOS
    {
      nombre: 'ZONA FROZEN',
      categoria: 'Almacén - Congelados',
      direccion: 'España 372, Río Gallegos',
      localidad: 'Río Gallegos',
      telefono: '',
      descuento: '10% exclusivo para afiliados sobre la compra final de productos (congelados, frutas y verduras, productos SIN TACC, rebozados, pizzas, empanadas, pescados, waffles, helados, etc.)',
      imagen: '',
      rubro: 'Comercio',
    },

    // VINERÍA
    {
      nombre: 'LA ESQUINA DE BETO',
      categoria: 'Vinería',
      direccion: '25 de Mayo 403',
      localidad: 'Río Gallegos',
      telefono: '',
      descuento: '10% en vinos y espumantes',
      imagen: '',
      rubro: 'Gastronomía',
    },

    // ZAPATERÍAS
    {
      nombre: 'BUENA PATA',
      categoria: 'Zapaterías',
      direccion: 'Av. Kirchner 1116',
      localidad: 'Río Gallegos',
      telefono: '',
      descuento: '10% efectivo',
      imagen: '',
      rubro: 'Indumentaria',
    },
    {
      nombre: 'EMANUEL CALZADOS',
      categoria: 'Zapaterías',
      direccion: 'Vélez Sársfield 17',
      localidad: 'Río Gallegos',
      telefono: '',
      descuento: '15% todos los medios',
      imagen: '',
      rubro: 'Indumentaria',
    },
    {
      nombre: 'EMANUEL CALZADOS',
      categoria: 'Zapaterías',
      direccion: 'San Martín 630',
      localidad: 'Río Gallegos',
      telefono: '',
      descuento: '20% efectivo',
      imagen: '',
      rubro: 'Indumentaria',
    },
    {
      nombre: 'LA ESTACIÓN CALZADOS',
      categoria: 'Zapaterías',
      direccion: 'Av. Kirchner 1158',
      localidad: 'Río Gallegos',
      telefono: '',
      descuento: '10% efectivo, tarjetas 3 y 6 cuotas sin interés',
      imagen: '',
      rubro: 'Indumentaria',
    },
    {
      nombre: 'SARKANY',
      categoria: 'Zapaterías',
      direccion: 'Alcorta 2 (esquina San Martín)',
      localidad: 'Río Gallegos',
      telefono: '',
      descuento: '10% efectivo',
      imagen: '',
      rubro: 'Indumentaria',
    },

      // MASCOTAS
    {
      nombre: 'TIENDA DE MASCOTAS',
      categoria: 'Mascotas',
      direccion: 'Calle Jose French e H. Yrigoyen',
      localidad: 'Río Gallegos',
      telefono: '',
      descuento: '10% en alimentos y 20% en accesorios con todos los medios de pago. No acumulable con otras promociones.',
      imagen: '',
      rubro: 'Comercio',
    }
    ];
  }
