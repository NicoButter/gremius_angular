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
    telefono: string;
    descuento: string;
    imagen: string;
    nuevo?: boolean;
  }> = [
    // ARTÍCULOS DE LIMPIEZA
    {
      nombre: 'DOÑA CARMEN',
      categoria: 'Artículos de Limpieza',
      direccion: 'Ramón y Cajal 333',
      telefono: '',
      descuento: '10% de descuento en efectivo',
      imagen: '',
    },

    // ARTÍCULOS ELECTRÓNICOS
    {
      nombre: 'NUMERAL',
      categoria: 'Artículos Electrónicos',
      direccion: 'Av. Kirchner 708 - Av. Kirchner 1115 - Av. Kirchner 1264 - Av. Riquez 550 - Calle 13 y 30 (San Benito)',
      telefono: '',
      descuento: '15% de descuento en efectivo',
      imagen: '',
    },

    // CAPACITACIONES
    {
      nombre: 'IAP RÍO GALLEGOS',
      categoria: 'Capacitaciones',
      direccion: 'Av. Kirchner 1529',
      telefono: '',
      descuento: '50% descuento en efectivo o transferencia en inscripciones',
      imagen: '',
    },

    // CARNICERÍA / ALMACÉN
    {
      nombre: 'PAMPA SUR',
      categoria: 'Carnicería / Almacén',
      direccion: 'Av. Gregores 1115',
      telefono: '',
      descuento: '10% desc. efectivo, 5% desc. tarjetas',
      imagen: '',
    },

    // CERRAJERÍA
    {
      nombre: 'CERRAJERÍA PREMIER',
      categoria: 'Cerrajería',
      direccion: 'Alcorta 164',
      telefono: '',
      descuento: '15% llaves codificadas del autom.',
      imagen: '',
    },

    // COTILLÓN - BAZAR - BOUTIQUE - REGALOS
    {
      nombre: 'BAMBA BIJOUTERIE',
      categoria: 'Cotillón - Bazar - Boutique - Regalos',
      direccion: 'Av. Kirchner 1270',
      telefono: '',
      descuento: '15% desc. efectivo, 3 cuotas sin interés',
      imagen: '',
    },
    {
      nombre: 'BUBBLE INC',
      categoria: 'Cotillón - Bazar - Boutique - Regalos',
      direccion: 'Alberdi 286, Local 3',
      telefono: '',
      descuento: '15% desc. en cotillón, 10% en decoración',
      imagen: '',
    },
    {
      nombre: 'DECO REGALERÍA',
      categoria: 'Cotillón - Bazar - Boutique - Regalos',
      direccion: 'Lisandro de la Torre 225',
      telefono: '',
      descuento: '20% descuento en efectivo',
      imagen: '',
    },
    {
      nombre: 'ZOCO',
      categoria: 'Cotillón - Bazar - Boutique - Regalos',
      direccion: 'Alberdi 254',
      telefono: '',
      descuento: '10% de descuento en efectivo',
      imagen: '',
    },

    // DECO
    {
      nombre: 'COSAS LINDAS',
      categoria: 'Deco',
      direccion: 'Zapiola 513',
      telefono: '',
      descuento: '10% de descuento en efectivo',
      imagen: '',
    },

    // ESTÉTICA - BARBERÍA - PELUQUERÍAS
    {
      nombre: 'C Y G ESTILO PERSONALIZADO',
      categoria: 'Estética - Barbería - Peluquerías',
      direccion: 'Av. Kirchner 1529',
      telefono: '',
      descuento: '10% descuento efectivo',
      imagen: '',
    },
    {
      nombre: 'D UÑAS',
      categoria: 'Estética - Barbería - Peluquerías',
      direccion: 'Alberdi 337 o Alcorta 24',
      telefono: '',
      descuento: '10% de descuento en efectivo',
      imagen: '',
    },
    {
      nombre: 'HARMONY',
      categoria: 'Estética - Barbería - Peluquerías',
      direccion: 'Alberdi 233',
      telefono: '',
      descuento: '30% de descuento en efectivo',
      imagen: '',
    },
    {
      nombre: 'SALÓN UNISEX MARIANA',
      categoria: 'Estética - Barbería - Peluquerías',
      direccion: 'Provincias Unidas 471',
      telefono: '',
      descuento: '20% descuento ef.',
      imagen: '',
    },
    {
      nombre: 'SALÓN DE BELLEZA CRISTINA',
      categoria: 'Estética - Barbería - Peluquerías',
      direccion: 'Lago Viedma y Antonio Rivero',
      telefono: '',
      descuento: '20% descuento efectivo en cortes',
      imagen: '',
    },

    // FARMACIAS
    {
      nombre: 'AUTOFARMA',
      categoria: 'Farmacias',
      direccion: 'Av. Kirchner 1057',
      telefono: '',
      descuento: '10% descuento perfumería y regalería (no incluye medicamentos)',
      imagen: '',
    },
    {
      nombre: 'LA FRANCO',
      categoria: 'Farmacias',
      direccion: 'Av. Gregores y Richieri - Av. Kirchner y 9 de Julio',
      telefono: '',
      descuento: '10% descuento perfumería y regalería (no incluye medicamentos)',
      imagen: '',
    },

    // FERRETERÍAS
    {
      nombre: 'FERRETERÍA MANZUR',
      categoria: 'Ferreterías',
      direccion: 'Av. Perón 685',
      telefono: '',
      descuento: '10% de descuento',
      imagen: '',
    },
    {
      nombre: 'RG SERVICIOS FERRETERÍA',
      categoria: 'Ferreterías',
      direccion: 'Alberdi 568',
      telefono: '',
      descuento: '7% todos los medios',
      imagen: '',
    },

    // FOTOGRAFÍA
    {
      nombre: 'TOMMY COLOR',
      categoria: 'Fotografía',
      direccion: 'Av. Kirchner 1101',
      telefono: '',
      descuento: '15% descuento efectivo en impresiones de fotos',
      imagen: '',
    },

    // GASTRONOMÍA - PASTELERÍA - ALMACENES
    {
      nombre: 'ARTE LATTE',
      categoria: 'Gastronomía - Pastelería - Almacenes',
      direccion: 'Av. Kirchner 1126',
      telefono: '',
      descuento: '15% efectivo',
      imagen: '',
    },
    {
      nombre: 'CAFÉ HONG KONG',
      categoria: 'Gastronomía - Pastelería - Almacenes',
      direccion: 'Rawson 18',
      telefono: '',
      descuento: '10% efectivo',
      imagen: '',
    },
    {
      nombre: 'CLUB BRITÁNICO',
      categoria: 'Gastronomía - Pastelería - Almacenes',
      direccion: 'Av. Kirchner 935',
      telefono: '',
      descuento: '10% efectivo',
      imagen: '',
    },
    {
      nombre: 'COMIDAS HUESINIS',
      categoria: 'Gastronomía - Pastelería - Almacenes',
      direccion: 'Antonio Machado 2261',
      telefono: '',
      descuento: '10% en compras mayores a $20.000 (efectivo o transferencia)',
      imagen: '',
    },
    {
      nombre: 'DELICIAS DE LA ABUELA',
      categoria: 'Gastronomía - Pastelería - Almacenes',
      direccion: 'Errazuriz 26',
      telefono: '',
      descuento: '10% efectivo',
      imagen: '',
    },
    {
      nombre: 'MOMA - SACRAMENTO CAFETERÍA',
      categoria: 'Gastronomía - Pastelería - Almacenes',
      direccion: 'España 85',
      telefono: '',
      descuento: '10% efectivo',
      imagen: '',
    },
    {
      nombre: 'MOMA - COMO EN CASA PIZZERÍA',
      categoria: 'Gastronomía - Pastelería - Almacenes',
      direccion: 'España 85',
      telefono: '',
      descuento: '10% efectivo',
      imagen: '',
    },
    {
      nombre: 'NENEO RESTAURANTE',
      categoria: 'Gastronomía - Pastelería - Almacenes',
      direccion: 'Av. San Martín 524',
      telefono: '',
      descuento: '10% efectivo / 5% tarjeta',
      imagen: '',
    },
    {
      nombre: 'ROSTISERÍA JOB',
      categoria: 'Gastronomía - Pastelería - Almacenes',
      direccion: 'Av. Perón 1559 - Alfonsín 123',
      telefono: '',
      descuento: '10% todos los medios',
      imagen: '',
    },
    {
      nombre: 'VÍA VENETO',
      categoria: 'Gastronomía - Pastelería - Almacenes',
      direccion: 'Salta 56',
      telefono: '',
      descuento: '15% efectivo',
      imagen: '',
    },
    {
      nombre: 'ZERO GLUTEN',
      categoria: 'Gastronomía - Pastelería - Almacenes',
      direccion: 'Zapiola 511',
      telefono: '',
      descuento: '10% efectivo',
      imagen: '',
    },

    // HELADERÍAS
    {
      nombre: 'TENTACIÓN',
      categoria: 'Heladerías',
      direccion: 'Av. Kirchner 1448 - Islas Malvinas 5 - España 85 (MOMA)',
      telefono: '',
      descuento: '20% todos los medios',
      imagen: '',
    },

    // INFORMÁTICA E INSUMOS
    {
      nombre: 'RFC',
      categoria: 'Informática e Insumos',
      direccion: 'Alberdi 573',
      telefono: '',
      descuento: '10% efectivo o 5% débito',
      imagen: '',
    },

    // JOYERÍAS
    {
      nombre: 'LOLA MORA',
      categoria: 'Joyerías',
      direccion: 'Av. Kirchner 915',
      telefono: '',
      descuento: '15% efectivo',
      imagen: '',
    },
    {
      nombre: 'TEPPA JOYAS',
      categoria: 'Joyerías',
      direccion: 'Av. Kirchner 681',
      telefono: '',
      descuento: '20% efectivo o débito',
      imagen: '',
    },

    // JUGUETERÍA
    {
      nombre: 'CASA TEPPA',
      categoria: 'Juguetería',
      direccion: 'Av. Kirchner 697',
      telefono: '',
      descuento: '20% efectivo o débito',
      imagen: '',
    },

    // LIBRERÍA - PAPELERÍA
    {
      nombre: '=A4',
      categoria: 'Librería - Papelería',
      direccion: 'Av. Kirchner 1539',
      telefono: '',
      descuento: '20% efectivo, tarjeta 3 cuotas sin interés',
      imagen: '',
    },
    {
      nombre: 'CAPIPE',
      categoria: 'Librería - Papelería',
      direccion: 'Av. Kirchner 1335',
      telefono: '',
      descuento: '10% efectivo o débito (no ofertas)',
      imagen: '',
    },
    {
      nombre: 'EL MAYORAL',
      categoria: 'Librería - Papelería',
      direccion: 'Mariano Moreno 256',
      telefono: '',
      descuento: '10% efectivo o débito',
      imagen: '',
    },
    {
      nombre: 'EL RELOJ',
      categoria: 'Librería - Papelería',
      direccion: 'Mitre 25',
      telefono: '',
      descuento: '10% efectivo, tarjeta 3 cuotas sin interés',
      imagen: '',
    },
    {
      nombre: 'TODO PAPEL',
      categoria: 'Librería - Papelería',
      direccion: 'Don Bosco 140',
      telefono: '',
      descuento: '15% efectivo o débito',
      imagen: '',
    },

    // MAYORISTAS
    {
      nombre: 'ACIDO RG',
      categoria: 'Mayoristas',
      direccion: 'Lisandro de la Torre 360',
      telefono: '',
      descuento: '10% todos los medios (no ofertas)',
      imagen: '',
    },
    {
      nombre: 'CAPIPE',
      categoria: 'Mayoristas',
      direccion: 'Mariano Moreno 66',
      telefono: '',
      descuento: '13% efectivo o débito (no ofertas)',
      imagen: '',
    },

    // MARMOLERÍA
    {
      nombre: 'VICTORIA',
      categoria: 'Marmolería',
      direccion: 'Mariano Moreno 269',
      telefono: '',
      descuento: 'Tarjetas 3 cuotas sin interés',
      imagen: '',
    },

    // MERCERÍA
    {
      nombre: 'LA PRINCESA',
      categoria: 'Mercería',
      direccion: '25 de Mayo 92',
      telefono: '',
      descuento: '10% todos los medios',
      imagen: '',
    },

    // NEUMÁTICOS / TALLER / LUBRICANTES
    {
      nombre: 'AUSTRAL GOMAS SRL.',
      categoria: 'Neumáticos / Taller / Lubricantes',
      direccion: 'Rivadavia 96',
      telefono: '',
      descuento: '20% descuento; tarjetas 3 y 6 cuotas sin interés',
      imagen: '',
    },
    {
      nombre: 'CRUCECOR',
      categoria: 'Neumáticos / Taller / Lubricantes',
      direccion: 'Mariano Moreno 95',
      telefono: '',
      descuento: '10% efectivo',
      imagen: '',
    },

    // ÓPTICAS
    {
      nombre: 'CENTRO ÓPTICO AUSTRAL',
      categoria: 'Ópticas',
      direccion: 'Zapiola 296',
      telefono: '',
      descuento: '10% efectivo, tarjeta 3 y 6 cuotas sin interés',
      imagen: '',
    },
    {
      nombre: 'ÓPTICA GALLEGOS',
      categoria: 'Ópticas',
      direccion: 'España 58',
      telefono: '',
      descuento: '15% efectivo',
      imagen: '',
    },

    // ORTOPEDIAS
    {
      nombre: 'DÍAZ VÉLEZ',
      categoria: 'Ortopedias',
      direccion: 'Perito Moreno 370',
      telefono: '',
      descuento: '15% efectivo',
      imagen: '',
    },
    {
      nombre: 'INTEGRAL',
      categoria: 'Ortopedias',
      direccion: 'Errazuriz 36',
      telefono: '',
      descuento: '15% efectivo',
      imagen: '',
    },

    // PANADERÍA
    {
      nombre: 'FRANOI',
      categoria: 'Panadería',
      direccion: 'Perito Moreno 189',
      telefono: '',
      descuento: '10% efectivo',
      imagen: '',
    },

    // PERFUMERÍA - COSMÉTICA
    {
      nombre: 'LA SERENA',
      categoria: 'Perfumería - Cosmética',
      direccion: 'Av. Perón 815',
      telefono: '',
      descuento: '10% todos los medios',
      imagen: '',
    },

    // PINTURERÍA
    {
      nombre: 'LA PINTURERÍA',
      categoria: 'Pinturería',
      direccion: 'Pellegrini 301',
      telefono: '',
      descuento: '15% efectivo',
      imagen: '',
    },

    // POLARIZADOS
    {
      nombre: 'EVOLUTION FILMS',
      categoria: 'Polarizados',
      direccion: 'Hipólito Yrigoyen 725',
      telefono: '',
      descuento: '10% efectivo',
      imagen: '',
    },

    // SALÓN DE EVENTOS
    {
      nombre: 'HAPPY WORLD',
      categoria: 'Salón de Eventos',
      direccion: 'Magallanes 69',
      telefono: '',
      descuento: '20% efectivo',
      imagen: '',
    },

    // SEGURIDAD
    {
      nombre: 'ROMERO SISTEMAS',
      categoria: 'Seguridad',
      direccion: 'Maipú 460',
      telefono: '',
      descuento: 'Condiciones preferenciales',
      imagen: '',
    },

    // SEGUROS
    {
      nombre: 'BRUSA ASESORES DE SEGUROS',
      categoria: 'Seguros',
      direccion: 'España 384',
      telefono: '',
      descuento: 'Mejor propuesta garantizada',
      imagen: '',
    },

    // SUPERMERCADOS - POLLERÍAS
    {
      nombre: 'DON ALDO',
      categoria: 'Supermercados - Pollerías',
      direccion: 'Alvear 1170 esq. Cepeda',
      telefono: '',
      descuento: '10% efectivo',
      imagen: '',
    },
    {
      nombre: 'EL HUEVO Y LA GALLINA',
      categoria: 'Supermercados - Pollerías',
      direccion: 'Hernán Cortéz 817',
      telefono: '',
      descuento: '15% efectivo, 10% débito',
      imagen: '',
    },
    {
      nombre: 'GREGORIO T. RODRÍGUEZ',
      categoria: 'Supermercados - Pollerías',
      direccion: 'Mariano Moreno 498 - Calle 13 entre 30 y 32',
      telefono: '',
      descuento: '5% todos los medios',
      imagen: '',
    },

    // TURISMO
    {
      nombre: 'MACA TOBIANO',
      categoria: 'Turismo',
      direccion: 'Contacto: reservas@macatobiano.com',
      telefono: '',
      descuento: '10% de descuento. Todos los medios de pago',
      imagen: '',
    },

    // VINERÍA
    {
      nombre: 'LA ESQUINA DE BETO',
      categoria: 'Vinería',
      direccion: '25 de Mayo 403',
      telefono: '',
      descuento: '10% en vinos y espumantes',
      imagen: '',
    },

    // ZAPATERÍAS
    {
      nombre: 'BUENA PATA',
      categoria: 'Zapaterías',
      direccion: 'Av. Kirchner 1116',
      telefono: '',
      descuento: '10% efectivo',
      imagen: '',
    },
    {
      nombre: 'EMANUEL CALZADOS',
      categoria: 'Zapaterías',
      direccion: 'Vélez Sársfield 17',
      telefono: '',
      descuento: '15% todos los medios',
      imagen: '',
    },
    {
      nombre: 'EMANUEL CALZADOS',
      categoria: 'Zapaterías',
      direccion: 'San Martín 630',
      telefono: '',
      descuento: '20% efectivo',
      imagen: '',
    },
    {
      nombre: 'LA ESTACIÓN CALZADOS',
      categoria: 'Zapaterías',
      direccion: 'Av. Kirchner 1158',
      telefono: '',
      descuento: '10% efectivo, tarjetas 3 y 6 cuotas sin interés',
      imagen: '',
    },
    {
      nombre: 'SARKANY',
      categoria: 'Zapaterías',
      direccion: 'Alcorta 2 (esquina San Martín)',
      telefono: '',
      descuento: '10% efectivo',
      imagen: '',
    },
    {
      nombre: 'ZAPATERÍA TURQUESA',
      categoria: 'Zapaterías',
      direccion: 'Errazuris 46 local 10',
      telefono: '',
      descuento: '15% efectivo',
      imagen: '',
    }
  ];
}
