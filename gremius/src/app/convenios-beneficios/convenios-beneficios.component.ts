import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { map, Observable, shareReplay } from 'rxjs';

interface ConvenioBeneficioRaw {
  comercio?: string;
  comercio_profesion?: string;
  rubro?: string;
  beneficio?: string;
  direccion?: string | null;
  localidad?: string | null;
  telefonos?: string[];
  whatsapp?: string[];
  email?: string | null;
  redes?: Record<string, string>;
  condiciones?: string | null;
  nuevo?: boolean;
  imagen_origen?: string | null;
  estado_revision?: string;
  observaciones?: string | null;
}

interface ConvenioBeneficioView {
  id: string;
  titulo: string;
  subtitulo: string;
  rubro: string;
  beneficio: string;
  direccion: string | null;
  localidad: string | null;
  telefonos: string[];
  condiciones: string | null;
  observaciones: string | null;
  nuevo: boolean;
  estadoRevision: string;
  imagen: string | null;
}

@Component({
  selector: 'app-convenios-beneficios',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './convenios-beneficios.component.html',
  styleUrls: ['./convenios-beneficios.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConveniosBeneficiosComponent {
  private readonly http = inject(HttpClient);

  readonly convenios$: Observable<ConvenioBeneficioView[]> = this.http
    .get<ConvenioBeneficioRaw[]>('assets/data/convenios_web.json')
    .pipe(
      map((items) =>
        items.map((item, index) => ({
          id: item.comercio_profesion?.toLowerCase().replace(/[^a-z0-9]+/g, '-') || `convenio-${index}`,
          titulo: item.comercio_profesion || item.comercio || 'Convenio',
          subtitulo: item.comercio || item.comercio_profesion || 'Convenio por beneficios',
          rubro: item.rubro || 'Beneficios',
          beneficio: item.beneficio || 'Beneficio disponible',
          direccion: item.direccion ?? null,
          localidad: item.localidad ?? null,
          telefonos: item.telefonos ?? [],
          condiciones: item.condiciones ?? null,
          observaciones: item.observaciones ?? null,
          nuevo: !!item.nuevo,
          estadoRevision: item.estado_revision || 'ok',
          imagen: item.imagen_origen ? `assets/images/${item.imagen_origen}` : null,
        }))
      ),
      shareReplay(1)
    );

  trackById(_: number, item: ConvenioBeneficioView): string {
    return item.id;
  }
}
