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
      direccion: 'Marini 332 bis',
      telefono: '15% de descuento en efectivo',
      descuento: '15% de descuento en efectivo',
      imagen: '',
    },
    
    // ARTÍCULOS ELECTRÓNICOS
    {
      nombre: 'MEGATEC',
      categoria: 'Artículos Electrónicos',
      direccion: 'Av. Kirchner 538, Av. Kirchner 831, Av. Kirchner 1154',
      telefono: '',
      descuento: 'Apotek 468: 10% de descuento, Av. Kirchner 538, 831 y 1154: 5% de descuento',
      imagen: '',
    },
    
    // CAPACITACIONES
    {
      nombre: 'LAP PRO BALLESTER',
      categoria: 'Capacitaciones',
      direccion: '',
      telefono: '',
      descuento: 'Av. Kirchner 1387 + 10% de descuento en efectivo o transferencia en inscripciones',
      imagen: '',
    },
    
    // CARNICERÍA / ALMACÉN
    {
      nombre: 'CARNICERÍA LA ESQUINA',
      categoria: 'Carnicería / Almacén',
      direccion: 'Pueyrredón 804',
      telefono: '',
      descuento: '10% Desc. Efectivo, 05% Desc. Transferencia',
      imagen: '',
    },
    
    // CERRAJERÍA
    {
      nombre: 'CERRAJERÍA PREMIER',
      categoria: 'Cerrajería',
      direccion: 'Acopita 381',
      telefono: '',
      descuento: '10% en llaves complicadas con acción',
      imagen: '',
    },
    
    // COTILLÓN - BAZAR - BOUTIQUE - REGALOS
    {
      nombre: 'BARRABAS BOUTIQUE',
      categoria: 'Cotillón - Bazar - Boutique - Regalos',
      direccion: 'Av. Roca 1115',
      telefono: '',
      descuento: '10% Desc. efectivo y C. Bantera',
      imagen: '',
    },
    {
      nombre: 'LITTLE BIR',
      categoria: 'Cotillón - Bazar - Boutique - Regalos',
      direccion: 'Alberdi 398, Local 6',
      telefono: '',
      descuento: '20% Desc. Efectivos, 30% en descuento',
      imagen: '',
    },
    {
      nombre: 'CECO REGALERÍA',
      categoria: 'Cotillón - Bazar - Boutique - Regalos',
      direccion: 'Belgrano 286',
      telefono: '',
      descuento: '5% de descuento en efectivo',
      imagen: '',
    },
    {
      nombre: 'BOOM',
      categoria: 'Cotillón - Bazar - Boutique - Regalos',
      direccion: 'Alberti 20',
      telefono: '',
      descuento: '10% de descuento en efectivo',
      imagen: '',
    },
    
    // DECO
    {
      nombre: 'DEOSSA HOMES',
      categoria: 'Deco',
      direccion: 'Zapiola 613',
      telefono: '',
      descuento: '10% de descuento en efectivo',
      imagen: '',
    },
    
    // ESTÉTICA - BARBERÍA - PELUQUERÍAS
    {
      nombre: 'C Y C ESTILO PERSONALIZADO',
      categoria: 'Estética - Barbería - Peluquerías',
      direccion: 'Av. Kirchner 1363',
      telefono: '',
      descuento: '10% de descuento efectivo',
      imagen: '',
    },
    {
      nombre: 'DANIELA CABRERA',
      categoria: 'Estética - Barbería - Peluquerías',
      direccion: 'Av. Pres. Néstor Carlos Kirchner 1387',
      telefono: '',
      descuento: 'Combo 2: 10% de descuento en efectivo',
      imagen: '',
    },
    {
      nombre: 'HARMONY',
      categoria: 'Estética - Barbería - Peluquerías',
      direccion: 'Alberti 823',
      telefono: '',
      descuento: '30% en esmaltado y maquillaje',
      imagen: '',
    },
    {
      nombre: 'PERALTA FEDERICO MATIAS',
      categoria: 'Estética - Barbería - Peluquerías',
      direccion: 'Antártida Argentina 1023',
      telefono: '',
      descuento: '20% de descuento en efectivo por corte de pelo completo',
      imagen: '',
    },
    {
      nombre: 'SALÓN DE BELLEZA CRISTINA',
      categoria: 'Estética - Barbería - Peluquerías',
      direccion: 'Lisio Vecina 7',
      telefono: '',
      descuento: 'Antartida Micaela: 10% descuento efectivo o transferencia',
      imagen: '',
    },
    
    // FARMACIAS
    {
      nombre: 'ACTOFARM A',
      categoria: 'Farmacias',
      direccion: 'Av. Kirchner 1167',
      telefono: '',
      descuento: '20% de descuento en perfumería y regalería. No aplica en medicamentos',
      imagen: '',
    },
    {
      nombre: 'LA FRANCO',
      categoria: 'Farmacias',
      direccion: 'Av. Remigio R Escalada 160, Kirchner 1166, Kirchner 1468, Juulito L Rodriguez Av Arg',
      telefono: '',
      descuento: '15% de descuento en perfumería, regalos, cuidado personal y varios',
      imagen: '',
    },
    
    // FERRETERÍAS
    {
      nombre: 'FERRETERÍA MANZUR',
      categoria: 'Ferreterías',
      direccion: 'Av. Perón 685',
      telefono: '',
      descuento: '10% de descuento en efectivo',
      imagen: '',
    },
    {
      nombre: 'FERREUNIÓN',
      categoria: 'Ferreterías',
      direccion: 'Alberti 35',
      telefono: '',
      descuento: '10% de descuento todos los modos de pago',
      imagen: '',
    },
    
    // FOTOGRAFÍA
    {
      nombre: 'TOMMY COLOR',
      categoria: 'Fotografía',
      direccion: 'Av. Kirchner 1125',
      telefono: '',
      descuento: '10% de descuento en impres. en estudio',
      imagen: '',
    },
    
    // GASTRONOMÍA - PASTELERÍA - ALMACENES
    {
      nombre: 'ARTE LATTE',
      categoria: 'Gastronomía - Pastelería - Almacenes',
      direccion: 'Av. Kirchner 1387, Local 14',
      telefono: '',
      descuento: '10% de descuento efectivo',
      imagen: '',
    },
    {
      nombre: 'CLUB BRITÁNICO',
      categoria: 'Gastronomía - Pastelería - Almacenes',
      direccion: 'Av. Roca 1048',
      telefono: '',
      descuento: '15% de descuento en salón y 20% en cerveza artesanal para llevar',
      imagen: '',
    },
    {
      nombre: 'CLUB BRITÁNICO',
      categoria: 'Gastronomía - Pastelería - Almacenes',
      direccion: 'Av. Kirchner 1367',
      telefono: '',
      descuento: '20% de descuento exclusivo',
      imagen: '',
    },
    {
      nombre: 'DELICIAS DE LA ABUELA',
      categoria: 'Gastronomía - Pastelería - Almacenes',
      direccion: 'Av. Kirchner 862',
      telefono: '',
      descuento: '05% de descuento en todas las tarjetas / 10% en efectivo',
      imagen: '',
    },
    {
      nombre: 'EL CALAFATE',
      categoria: 'Gastronomía - Pastelería - Almacenes',
      direccion: 'Zona Industrial Lote 1 Mz B',
      telefono: '',
      descuento: 'Entre 05 y 10% en efectivo y transferencia',
      imagen: '',
    },
    {
      nombre: 'NORMA - OVNIS EN CASA PIZZERÍA',
      categoria: 'Gastronomía - Pastelería - Almacenes',
      direccion: 'Patagonia 361',
      telefono: '',
      descuento: '10% de descuento efectivo',
      imagen: '',
    },
    {
      nombre: 'NENKO RESTAURANTE PARRILLA',
      categoria: 'Gastronomía - Pastelería - Almacenes',
      direccion: 'Av. Kirchner 1725',
      telefono: '',
      descuento: '10% de descuento efectivo',
      imagen: '',
    },
    {
      nombre: 'PICA TIERRA',
      categoria: 'Gastronomía - Pastelería - Almacenes',
      direccion: 'Av. S.M. Peña 1042, Av. Kirchner 1361',
      telefono: '',
      descuento: '10% de descuento todos los pagos',
      imagen: '',
    },
    {
      nombre: 'YA VUELVO',
      categoria: 'Gastronomía - Pastelería - Almacenes',
      direccion: 'Roca y España, Zapiola 679',
      telefono: '',
      descuento: '20% en parrilla y mariscos',
      imagen: '',
    },
    {
      nombre: 'ZERO GLUTEN',
      categoria: 'Gastronomía - Pastelería - Almacenes',
      direccion: 'Zapiola 811/99',
      telefono: '',
      descuento: '10% de descuento efectivo',
      imagen: '',
    },
    
    // HELADERÍAS
    {
      nombre: 'TENTACIÓN',
      categoria: 'Heladerías',
      direccion: 'Av. Kirchner 1046',
      telefono: '',
      descuento: 'Islas Malvinas 6, España 98, Roca 1: 10% de descuento todos los medios de pago',
      imagen: '',
    },
    
    // INDUMENTARIA
    {
      nombre: 'PATAGONIA CARPINTERÍA',
      categoria: 'Indumentaria',
      direccion: 'Av. Kirchner 867',
      telefono: '',
      descuento: '10% de descuento en trabajos y 5% en cotización de carro, en roperos y placard',
      imagen: '',
    },
    {
      nombre: 'JOSEFINA INDUMENTARIA',
      categoria: 'Indumentaria',
      direccion: 'Gregores 164, San Martín 355',
      telefono: '',
      descuento: '10% efectivo / 5% tarjetas',
      imagen: '',
    },
    {
      nombre: 'CALAVERA EN CHILE',
      categoria: 'Indumentaria',
      direccion: 'Av. Kirchner 1078 e Isidoro Martínez 77',
      telefono: '',
      descuento: '20% Desc. efectivo',
      imagen: '',
    },
    {
      nombre: 'DULCE LUZ INDUMENTARIA',
      categoria: 'Indumentaria',
      direccion: 'Av. San Martín 51',
      telefono: '',
      descuento: '10% de descuento en efectivo',
      imagen: '',
    },
    {
      nombre: 'CHESKY',
      categoria: 'Indumentaria',
      direccion: 'Sarmiento 90',
      telefono: '',
      descuento: '20% de descuento todos los medios',
      imagen: '',
    },
    {
      nombre: 'RIWELKAN INDUMENTARIA',
      categoria: 'Indumentaria',
      direccion: 'San Martín 350 y 55, Av. Kirchner 867',
      telefono: '',
      descuento: '10% de descuento efectivo y transferencia',
      imagen: '',
    },
    {
      nombre: 'JACINTA',
      categoria: 'Indumentaria',
      direccion: 'Av. Rivadavia 300ª, Av. Fadul de Av. Kirchner 1 Av. Fadul',
      telefono: '',
      descuento: 'Sacar lista de 3 talles y bono 1: 10% desc. efectivo y hasta 3 y 6 cuotas sin interés',
      imagen: '',
    },
    {
      nombre: 'MOONLINE',
      categoria: 'Indumentaria',
      direccion: 'Av. Rivadavia 300 A',
      telefono: '',
      descuento: '20% efectivo de las prendas',
      imagen: '',
    },
    {
      nombre: 'FUNDACIÓN CREAR',
      categoria: 'Indumentaria',
      direccion: 'Güemes 66 - B43 Salgo street - 10% desc. en efectivo',
      telefono: '',
      descuento: '10% desc. en efectivo',
      imagen: '',
    },
    {
      nombre: 'BATTIMBULLO',
      categoria: 'Indumentaria',
      direccion: '04 (Av. 08 29 y Av. entre 9 y Urquiza)',
      telefono: '',
      descuento: '10% de descuento todos los medios + Aguja de 3 cuotas sin int.',
      imagen: '',
    },
    {
      nombre: 'KIMUZ',
      categoria: 'Indumentaria',
      direccion: 'Alberti 05',
      telefono: '',
      descuento: '20% efectivo todos los días',
      imagen: '',
    },
    {
      nombre: 'SU TIU PELUDO ESTHER',
      categoria: 'Indumentaria',
      direccion: 'Zapiola 1182',
      telefono: '',
      descuento: '20% de descuento en efectivo',
      imagen: '',
    },
    {
      nombre: 'OXTUBRE DULCE ABRIGO',
      categoria: 'Indumentaria',
      direccion: 'Brown 202',
      telefono: '',
      descuento: '30% de descuento en efectivo',
      imagen: '',
    },
    {
      nombre: 'SIAMO PARA VOS',
      categoria: 'Indumentaria',
      direccion: 'A. Alberdi 99',
      telefono: '',
      descuento: '20% de descuento todos los medios',
      imagen: '',
    },
    {
      nombre: 'MUNDO BUBBAS',
      categoria: 'Indumentaria',
      direccion: 'Zapiola 780, 20% desc. 04, 3 y 6 cd. calc. 10% y 12 calc.',
      telefono: '',
      descuento: '20% desc. 04, 3 y 6 cd. calc. 10% y 12 calc.',
      imagen: '',
    },
    
    // INFORMÁTICA E INSUMOS
    {
      nombre: 'INFO',
      categoria: 'Informática e Insumos',
      direccion: 'Alberti 997',
      telefono: '',
      descuento: '10% de descuento en efectivo en 04 desc. con efectiv',
      imagen: '',
    },
    
    // LIBRERÍAS
    {
      nombre: 'LOLA MORA',
      categoria: 'Librerías',
      direccion: 'Av. Kirchner 1167',
      telefono: '',
      descuento: '10% de descuento en efectivo',
      imagen: '',
    },
    {
      nombre: 'PAPIS JUVER',
      categoria: 'Librerías',
      direccion: 'Av. Kirchner 865',
      telefono: '',
      descuento: '10% de descuento especiales',
      imagen: '',
    },
    
    // JUGUETERÍA
    {
      nombre: 'DAMA FESTA',
      categoria: 'Juguetería',
      direccion: 'Av. Kirchner 867',
      telefono: '',
      descuento: '10% de descuento efectivo u débito',
      imagen: '',
    },
    
    // LIBRERÍA - PAPELERÍA
    {
      nombre: 'SAMI',
      categoria: 'Librería - Papelería',
      direccion: 'Av. Kirchner 1123/1095',
      telefono: '',
      descuento: 'Descuento efectivo, tarjeta p. clásica, nutririt',
      imagen: '',
    },
    {
      nombre: 'EL MAYORAL',
      categoria: 'Librería - Papelería',
      direccion: 'M.Moreno Arg. 3A',
      telefono: '',
      descuento: '10% Islas Efectivo U Débito',
      imagen: '',
    },
    {
      nombre: 'EL RELBOL',
      categoria: 'Librería - Papelería',
      direccion: 'Entre 30, 04 desc. Efectivo, 1-90 H Habr y 3 coutas de 12 en 2Arg',
      telefono: '',
      descuento: '04 desc. Efectivo, 1-90 H Habr y 3 coutas de 12 en 2Arg',
      imagen: '',
    },
    {
      nombre: 'TODO PAPEL',
      categoria: 'Librería - Papelería',
      direccion: 'Don Bosco 346',
      telefono: '',
      descuento: '10% de descuento en efectivo u débito',
      imagen: '',
    },
    
    // MAYORISTAS
    {
      nombre: 'RAGA',
      categoria: 'Mayoristas',
      direccion: 'Av. Roca 1360',
      telefono: '',
      descuento: '10% de descuento efectivo, tarjetas, Ciento, Argentas',
      imagen: '',
    },
    {
      nombre: 'ACIDO 380',
      categoria: 'Mayoristas',
      direccion: 'Lisandro de La Torre 380',
      telefono: '',
      descuento: '20% de descuento todos los - en San Jorge',
      imagen: '',
    },
    {
      nombre: 'DANFER',
      categoria: 'Mayoristas',
      direccion: 'Patagonia 861',
      telefono: '',
      descuento: '30% efectivo de mercadería',
      imagen: '',
    },
    
    // MARMOLERÍA
    {
      nombre: 'VICTORIA',
      categoria: 'Marmolería',
      direccion: 'Marcelo Moreno 200',
      telefono: '',
      descuento: 'Traslados: 4 cuotas sin interés',
      imagen: '',
    },
    
    // MERCERÍA
    {
      nombre: 'LA PRINCESA',
      categoria: 'Mercería',
      direccion: 'Pío Trejo 187',
      telefono: '',
      descuento: '20% de descuento en todos los rubros',
      imagen: '',
    },
    
    // NEUMÁTICOS / TALLER / LUBRICANTES
    {
      nombre: 'AUSTRAL CUBIERTAS SRL',
      categoria: 'Neumáticos / Taller / Lubricantes',
      direccion: 'Patagonia 30',
      telefono: '',
      descuento: '10% Desc. tarjetas 5 y 20 cuotas 0-30 % int.',
      imagen: '',
    },
    {
      nombre: 'CROCEGON',
      categoria: 'Neumáticos / Taller / Lubricantes',
      direccion: 'Maipú Necochea 66',
      telefono: '',
      descuento: '30% Desc. en cuotas',
      imagen: '',
    },
    
    // ÓPTICAS
    {
      nombre: 'ÓPTICA PUNTO AUSTRAL',
      categoria: 'Ópticas',
      direccion: 'Zapiola Alem',
      telefono: '',
      descuento: '10% Desc. efect., tarjeta, 3 y 6 c.s. int.',
      imagen: '',
    },
    {
      nombre: 'ÓPTICA GALILEO',
      categoria: 'Ópticas',
      direccion: 'Rápola 830',
      telefono: '',
      descuento: '01% de descuento efectivo',
      imagen: '',
    },
    
    // ORTOPEDIAS
    {
      nombre: 'DIAZ VELEZ',
      categoria: 'Ortopedias',
      direccion: 'Puerto Madryn 70',
      telefono: '',
      descuento: '10% de descuento en efectivo',
      imagen: '',
    },
    {
      nombre: 'INTEGRAL',
      categoria: 'Ortopedias',
      direccion: 'Embajador 1485',
      telefono: '',
      descuento: '10% de descuento efectivo',
      imagen: '',
    },
    
    // PANADERÍA
    {
      nombre: 'FRANCO',
      categoria: 'Panadería',
      direccion: 'Puerto 208',
      telefono: '',
      descuento: '10% de descuento en efectivo',
      imagen: '',
    },
    
    // PERFUMERÍA - COSMÉTICA
    {
      nombre: 'LA SERENA',
      categoria: 'Perfumería - Cosmética',
      direccion: 'Av. Perón 868',
      telefono: '',
      descuento: '10% de descuento todos los medios de pagos',
      imagen: '',
    },
    
    // PINTURERÍA
    {
      nombre: 'LA PINTURERÍA',
      categoria: 'Pinturería',
      direccion: 'Pilbottom 391',
      telefono: '',
      descuento: '15% de descuento en efectivo',
      imagen: '',
    },
    
    // POLARIZADOS
    {
      nombre: 'EVOLUTION FILMS',
      categoria: 'Polarizados',
      direccion: 'Arroyo Judo 794',
      telefono: '',
      descuento: '10% de descuento en efectivo',
      imagen: '',
    },
    
    // SALÓN DE EVENTOS
    {
      nombre: 'HAPPY WORLD',
      categoria: 'Salón de Eventos',
      direccion: 'Plucalle 80',
      telefono: '',
      descuento: '30% de descuento en efectivo',
      imagen: '',
    },
    
    // SEGURIDAD
    {
      nombre: 'ROMERO SISTEMAS',
      categoria: 'Seguridad',
      direccion: 'Belgrano 66',
      telefono: '',
      descuento: 'Contratación preferencial',
      imagen: '',
    },
    
    // SEGUROS
    {
      nombre: 'BRISSA ASESORES DE SEGUROS',
      categoria: 'Seguros',
      direccion: 'España 106',
      telefono: '',
      descuento: '10% en coupón para todo tipo de seguros',
      imagen: '',
    },
    
    // SUPERMERCADOS - POLLERÍAS
    {
      nombre: 'DON ALDO',
      categoria: 'Supermercados - Pollerías',
      direccion: 'A Alberdi 830 Bis Gaspern',
      telefono: '',
      descuento: '10% de descuento efectivo',
      imagen: '',
    },
    {
      nombre: 'EL SHEIK Y LA SIBERIA',
      categoria: 'Supermercados - Pollerías',
      direccion: 'Meinram Cornés 190',
      telefono: '',
      descuento: '10% de descuento efectivo',
      imagen: '',
    },
    {
      nombre: 'GREGORIO Y. RODRÍGUEZ',
      categoria: 'Supermercados - Pollerías',
      direccion: 'Marcelo Moreno 338, Calle 18 de Santa 340 Y 32',
      telefono: '',
      descuento: '5% de descuento en todos los medios',
      imagen: '',
    },
    
    // TURISMO
    {
      nombre: 'WACA TURISMO',
      categoria: 'Turismo',
      direccion: '',
      telefono: '',
      descuento: 'Patagónica Robados: 10% Desc. todos los medios',
      imagen: '',
    },
    
    // VINERÍA
    {
      nombre: 'LA ESQUINA DE VISTO',
      categoria: 'Vinería',
      direccion: 'Av. 25 de Mayo 469',
      telefono: '',
      descuento: '10% Desc. en vinos y espumantes',
      imagen: '',
    },
    
    // ZAPATERÍAS
    {
      nombre: 'SHOE DA PLAZA',
      categoria: 'Zapaterías',
      direccion: 'Av. Kirchner 1232',
      telefono: '',
      descuento: '10% de descuento en efectivo',
      imagen: '',
    },
    {
      nombre: 'EMANUEL CALZADOS',
      categoria: 'Zapaterías',
      direccion: 'Vélez Sarsfield 27',
      telefono: '',
      descuento: '10% Desc. en tod. L. medios',
      imagen: '',
    },
    {
      nombre: 'EMANUEL CALZADOS',
      categoria: 'Zapaterías',
      direccion: 'San Martín 102',
      telefono: '',
      descuento: '10% de descuento',
      imagen: '',
    },
    {
      nombre: 'CALZADOS EMANUEL',
      categoria: 'Zapaterías',
      direccion: 'Máximo C. Leyres 136',
      telefono: '',
      descuento: '10% de descuento en efectivo',
      imagen: '',
    },
    {
      nombre: 'TARGETAS 2 Y 3 CUOTAS SIN INTERÉS',
      categoria: 'Zapaterías',
      direccion: '',
      telefono: '',
      descuento: '2 y 3 cuotas sin interés',
      imagen: '',
    },
    {
      nombre: 'SARKANY',
      categoria: 'Zapaterías',
      direccion: 'A Alberdi 3 o Esquina San Martín',
      telefono: '',
      descuento: '10% de descuento en efectivo',
      imagen: '',
    },
    {
      nombre: 'ZAPATERIA TURBILENTA',
      categoria: 'Zapaterías',
      direccion: 'E.Minguillón Av. Lelec 381',
      telefono: '',
      descuento: '10% Desc. en efectivo',
      imagen: '',
    }
  ];
}
