import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Efemeride {
  mes: number;
  dia: number;
  titulo: string;
  esDestacada?: boolean;
  diasHasta?: number;
}

@Component({
  selector: 'app-efemerides',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './efemerides.component.html',
  styleUrls: ['./efemerides.component.css']
})
export class EfemeridesComponent implements OnInit {
  efemerides: Efemeride[] = [
    // ENERO
    { mes: 1, dia: 23, titulo: 'CONMEMORACIÓN DE UN HITO PARA LA CLASE TRABAJADORA ARGENTINA: EL DERECHO A TENER VACACIONES PAGAS' },
    { mes: 1, dia: 25, titulo: 'DÍA NACIONAL DE LOS Y LAS REPORTERAS GRÁFICAS - HOMENAJE A JOSÉ LUIS CABEZAS' },
    
    // FEBRERO
    { mes: 2, dia: 10, titulo: 'LEY SÁENZ PEÑA: SOBRE EL VOTO, UNIVERSAL, SECRETO Y OBLIGATORIO' },
    { mes: 2, dia: 12, titulo: 'CARNAVALES - FIESTA POPULAR (12-13)' },
    
    // MARZO
    { mes: 3, dia: 1, titulo: 'DÍA MUNDIAL PARA LA NO DISCRIMINACIÓN' },
    { mes: 3, dia: 8, titulo: 'DÍA INTERNACIONAL DE LA MUJER' },
    { mes: 3, dia: 24, titulo: 'DÍA NACIONAL DE LA MEMORIA, POR LA VERDAD Y LA JUSTICIA "NUNCA MÁS"' },
    
    // ABRIL
    { mes: 4, dia: 2, titulo: 'DÍA DEL VETERANO Y DE LOS CAÍDOS EN LA GUERRA DE MALVINAS' },
    { mes: 4, dia: 4, titulo: 'ASESINATO DE CARLOS FUENTEALBA' },
    { mes: 4, dia: 30, titulo: 'DÍA DE LA CONSTITUCIÓN NACIONAL' },
    
    // MAYO
    { mes: 5, dia: 1, titulo: 'DÍA DE LOS TRABAJADORES Y TRABAJADORAS' },
    { mes: 5, dia: 2, titulo: 'DÍA NACIONAL DEL CRUCERO ARA GENERAL BELGRANO' },
    { mes: 5, dia: 15, titulo: 'DÍA CONMEMORATIVO AL "ROSARIAZO"' },
    { mes: 5, dia: 25, titulo: 'DÍA DE LA REVOLUCIÓN DE MAYO' },
    
    // JUNIO
    { mes: 6, dia: 7, titulo: 'DÍA NACIONAL DE LOS Y LAS PERIODISTAS' },
    { mes: 6, dia: 12, titulo: 'DÍA MUNDIAL CONTRA EL TRABAJO INFANTIL' },
    { mes: 6, dia: 14, titulo: 'DÍA MUNDIAL DE LAS PERSONAS DONANTES DE SANGRE' },
    { mes: 6, dia: 15, titulo: 'DÍA MUNDIAL DE TOMA DE CONCIENCIA DE ABUSO Y MALTRATO EN LA VEJEZ' },
    { mes: 6, dia: 17, titulo: 'DÍA CONMEMORATIVO DEL FALLECIMIENTO DEL GRAL. MARTÍN MIGUEL DE GÜEMES' },
    { mes: 6, dia: 20, titulo: 'DÍA DE LA BANDERA' },
    { mes: 6, dia: 28, titulo: 'DÍA INTERNACIONAL DEL ORGULLO LGBTIQ+' },
    
    // JULIO
    { mes: 7, dia: 6, titulo: 'DÍA DE LOS EMPLEADOS Y EMPLEADAS LEGISLATIVAS DE LA PROVINCIA DE SANTA CRUZ' },
    { mes: 7, dia: 8, titulo: 'SE CONMEMORA LA PROMULGACIÓN DE LA LEY 1420 DE EDUCACIÓN COMÚN, GRATUITA Y OBLIGATORIA' },
    { mes: 7, dia: 9, titulo: 'DÍA DE LA INDEPENDENCIA DE ARGENTINA' },
    { mes: 7, dia: 13, titulo: 'DÍA DE LA CREACIÓN DEL SINDICATO DE LUZ Y FUERZA' },
    { mes: 7, dia: 18, titulo: 'DÍA CONMEMORATIVO POR EL ATENTADO CONTRA LA AMIA' },
    { mes: 7, dia: 27, titulo: 'DÍA DE LOS Y LAS EMPLEADAS PÚBLICAS PROVINCIALES' },
    { mes: 7, dia: 30, titulo: 'DÍA MUNDIAL CONTRA LA TRATA DE PERSONAS' },
    
    // AGOSTO
    { mes: 8, dia: 9, titulo: 'DÍA INTERNACIONAL DE LAS POBLACIONES INDÍGENAS' },
    { mes: 8, dia: 12, titulo: 'DÍA INTERNACIONAL DE LAS INFANCIAS (EL TERCER DOMINGO DEL MES)' },
    { mes: 8, dia: 17, titulo: 'ANIVERSARIO DE LA MUERTE DEL GRAL. SAN MARTÍN' },
    { mes: 8, dia: 21, titulo: 'SANCIÓN DE LA LEY DE ANULACIÓN DE LEYES DE PUNTO FINAL Y OBEDIENCIA DE VIDA' },
    { mes: 8, dia: 29, titulo: 'DÍA NACIONAL DE LOS ABOGADOS Y LAS ABOGADAS' },
    { mes: 8, dia: 30, titulo: 'DÍA INTERNACIONAL DE LAS VÍCTIMAS POR DESAPARICIONES FORZADAS' },
    
    // SEPTIEMBRE
    { mes: 9, dia: 4, titulo: 'DÍA DE LOS SECRETARIOS Y LAS SECRETARIAS' },
    { mes: 9, dia: 8, titulo: 'DÍA PROVINCIAL DE LA PREVENCIÓN DEL SUICIDIO' },
    { mes: 9, dia: 11, titulo: 'DÍA DE LOS MAESTROS Y LAS MAESTRAS' },
    { mes: 9, dia: 13, titulo: 'DÍA DE LOS BIBLIOTECARIOS Y LAS BIBLIOTECARIAS' },
    { mes: 9, dia: 15, titulo: 'DÍA INTERNACIONAL DE LA DEMOCRACIA' },
    { mes: 9, dia: 23, titulo: 'DÍA NACIONAL DE LOS DERECHOS POLÍTICOS DE LA MUJER - PROMULGACIÓN DE LA LEY DE VOTO FEMENINO' },
    { mes: 9, dia: 25, titulo: 'SALUTACIÓN A LOS TRABAJADORES Y TRABAJADORAS DEL ORGANISMO DE CONTROL DE LAS CUENTAS PÚBLICAS EN EL ÁMBITO DE LA PROVINCIA DE SANTA CRUZ - SE CONMEMORA LA CREACIÓN DEL SINDICATO' },
    
    // OCTUBRE
    { mes: 10, dia: 2, titulo: 'DÍA INTERNACIONAL DE LA NO VIOLENCIA' },
    { mes: 10, dia: 5, titulo: 'DÍA DE LOS TRABAJADORES Y LAS TRABAJADORAS VIALES' },
    { mes: 10, dia: 12, titulo: 'DÍA DEL RESPETO A LA DIVERSIDAD CULTURAL' },
    { mes: 10, dia: 13, titulo: 'DÍA NACIONAL DE LOS PSICÓLOGOS Y LAS PSICÓLOGAS' },
    
    // NOVIEMBRE
    { mes: 11, dia: 8, titulo: 'DÍA DE LOS EMPLEADOS Y LAS EMPLEADAS MUNICIPALES' },
    { mes: 11, dia: 16, titulo: 'DÍA DE LOS TRABAJADORES Y TRABAJADORAS JUDICIALES' },
    { mes: 11, dia: 20, titulo: 'DÍA DE LA SOBERANÍA NACIONAL' },
    { mes: 11, dia: 25, titulo: 'DÍA INTERNACIONAL DE LA ELIMINACIÓN DE LA VIOLENCIA CONTRA LA MUJER' },
    { mes: 11, dia: 28, titulo: 'DÍA DE LA CONSTITUCIÓN PROVINCIAL' },
    
    // DICIEMBRE
    { mes: 12, dia: 3, titulo: 'DÍA NACIONAL DE LOS Y LAS MÉDICAS' },
    { mes: 12, dia: 10, titulo: 'DÍA DE LOS Y LAS TRABAJADORAS SOCIALES' },
    { mes: 12, dia: 17, titulo: 'DÍA NACIONAL DE LOS CONTADORES Y CONTADORAS PÚBLICAS' },
    { mes: 12, dia: 20, titulo: 'DÍA INTERNACIONAL DE LA SOLIDARIDAD HUMANA' }
  ];

  efemeridePrincipal: Efemeride | null = null;
  efemeridesProximas: Efemeride[] = [];
  efemeridePasada: Efemeride | null = null;
  mesActual: string = '';
  mesesDelAnio = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
  ];

  ngOnInit() {
    this.calcularEfemeridesDestacadas();
  }

  calcularEfemeridesDestacadas() {
    const hoy = new Date();
    const mesActual = hoy.getMonth() + 1; // getMonth() devuelve 0-11
    const diaActual = hoy.getDate();
    
    this.mesActual = this.mesesDelAnio[mesActual - 1];

    // Calcular días hasta cada efeméride
    this.efemerides.forEach(efemeride => {
      const diasHasta = this.calcularDiasHasta(diaActual, mesActual, efemeride.dia, efemeride.mes);
      efemeride.diasHasta = diasHasta;
      efemeride.esDestacada = false;
    });

    // Ordenar por proximidad
    const efemeridesOrdenadas = [...this.efemerides].sort((a, b) => 
      Math.abs(a.diasHasta!) - Math.abs(b.diasHasta!)
    );

    // Encontrar la efeméride principal (la del día o la más cercana)
    const masCercana = efemeridesOrdenadas[0];
    
    if (masCercana.diasHasta === 0) {
      // Es hoy
      this.efemeridePrincipal = { ...masCercana, esDestacada: true };
    } else if (masCercana.diasHasta! > 0) {
      // La más cercana está en el futuro
      this.efemeridePrincipal = { ...masCercana, esDestacada: true };
      
      // Buscar la última que pasó
      const pasadas = efemeridesOrdenadas.filter(e => e.diasHasta! < 0);
      if (pasadas.length > 0) {
        this.efemeridePasada = pasadas[0];
      }
    } else {
      // La más cercana ya pasó
      this.efemeridePasada = { ...masCercana };
      
      // Buscar la próxima
      const futuras = efemeridesOrdenadas.filter(e => e.diasHasta! > 0);
      if (futuras.length > 0) {
        this.efemeridePrincipal = { ...futuras[0], esDestacada: true };
      }
    }

    // Obtener las próximas 5 efemérides (excluyendo la principal)
    this.efemeridesProximas = efemeridesOrdenadas
      .filter(e => e.diasHasta! > 0 && e !== masCercana)
      .slice(0, 5);
  }

  calcularDiasHasta(diaActual: number, mesActual: number, diaEfemeride: number, mesEfemeride: number): number {
    const fechaActual = new Date(new Date().getFullYear(), mesActual - 1, diaActual);
    let fechaEfemeride = new Date(new Date().getFullYear(), mesEfemeride - 1, diaEfemeride);
    
    // Si la fecha ya pasó este año, calcular para el próximo año
    if (fechaEfemeride < fechaActual) {
      fechaEfemeride = new Date(new Date().getFullYear() + 1, mesEfemeride - 1, diaEfemeride);
    }
    
    // Calcular diferencia en días
    const diferencia = Math.floor((fechaEfemeride.getTime() - fechaActual.getTime()) / (1000 * 60 * 60 * 24));
    
    // Si es negativo, significa que ya pasó
    if (diferencia < 0 && fechaEfemeride.getFullYear() === fechaActual.getFullYear()) {
      return diferencia;
    }
    
    return diferencia;
  }

  getNombreMes(mes: number): string {
    return this.mesesDelAnio[mes - 1];
  }

  getEfemeridesDelMes(mes: number): Efemeride[] {
    return this.efemerides.filter(e => e.mes === mes);
  }

  getMensajeDiasHasta(efemeride: Efemeride): string {
    if (!efemeride.diasHasta) return '';
    
    if (efemeride.diasHasta === 0) {
      return '¡HOY!';
    } else if (efemeride.diasHasta === 1) {
      return 'Mañana';
    } else if (efemeride.diasHasta > 1 && efemeride.diasHasta <= 7) {
      return `En ${efemeride.diasHasta} días`;
    } else if (efemeride.diasHasta < 0 && efemeride.diasHasta >= -7) {
      return `Hace ${Math.abs(efemeride.diasHasta)} días`;
    }
    return '';
  }
}
