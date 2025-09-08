import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { DelegadosAfiliadosComponent } from './delegados-afiliados/delegados-afiliados.component';
import { LeyParitaria3022Component } from './ley-paritaria-3022/ley-paritaria-3022.component';
import { SistemaSalarialComponent } from './sistema-salarial/sistema-salarial.component';
import { SobreNosotrosComponent } from './sobre-nosotros/sobre-nosotros.component';
import { SecretariasComponent } from './secretarias/secretarias.component';
import { SedeDetailComponent } from './sede-detail/sede-detail.component';
import { SedesComponent } from './sedes/sedes.component';
import { ComisionActualComponent } from './comision-actual/comision-actual.component';
import { ComisionesAnterioresComponent } from './comisiones-anteriores/comisiones-anteriores.component';
import { LicenciaPromocionComponent } from './licencia-promocion/licencia-promocion.component';
import { LicenciaContratadosComponent } from './licencia-contratados/licencia-contratados.component';
import { ContactComponent } from './contact/contact.component';
import { ReglamentoParaLaJusticiaComponent } from './reglamento-para-la-justicia/reglamento-para-la-justicia.component';
import { AfiliacionesComponent } from './afiliaciones/afiliaciones.component';
import { DerechoLaboralComponent } from './derecho-laboral/derecho-laboral.component';
import { DerechoSindicalComponent } from './derecho-sindical/derecho-sindical.component';
import { LogosComponent } from './logos/logos.component';
import { HistoriaComponent } from './historia/historia.component';
import { EncuentroMujeresDiversidadsComponent } from './encuentro-mujeres-diversidades/encuentro-mujeres-diversidades.component';
import { GremioJubiladosJudicialesComponent } from './gremio-jubilados-judiciales/gremio-jubilados-judiciales.component';
import { DiscapacidadComponent } from './discapacidad/discapacidad.component';
import { GeneroDiversidadComponent } from './genero-diversidad/genero-diversidad.component';
import { GaleriaHistoricaComponent } from './galeria-historica/galeria-historica.component';
import { BienestarLaboralComponent } from './bienestar-laboral/bienestar-laboral.component';
import { ProtocoloSaludMentalComponent } from './protocolo-salud-mental/protocolo-salud-mental.component';


export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'delegados-afiliados', component: DelegadosAfiliadosComponent },
  { path: 'ley-paritaria-3022', component: LeyParitaria3022Component },
  { path: 'sistema-salarial', component: SistemaSalarialComponent },
  { path: 'sobrenosotros', component: SobreNosotrosComponent },
  { path: 'secretarias', component: SecretariasComponent },
  { path: 'sedes', component: SedesComponent },
  { path: 'sedes/:id', component: SedeDetailComponent },
  { path: 'comision-actual', component: ComisionActualComponent },
  { path: 'comisiones-anteriores', component: ComisionesAnterioresComponent },
  { path: 'licencia-promocion', component: LicenciaPromocionComponent },
  { path: 'licencia-contratados', component: LicenciaContratadosComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'afiliaciones', component: AfiliacionesComponent },
  { path: 'derecho-laboral', component: DerechoLaboralComponent },
  { path: 'derecho-sindical', component: DerechoSindicalComponent },
  { path: 'logos', component: LogosComponent },
  { path: 'reglamento-justicia', component: ReglamentoParaLaJusticiaComponent },
  { path: 'historia', component: HistoriaComponent },
  { path: 'gremio-jubilados-judiciales', component: GremioJubiladosJudicialesComponent },
  { path: 'encuentro-mujeres-diversidades', component: EncuentroMujeresDiversidadsComponent },
  { path: 'discapacidad', component: DiscapacidadComponent },
  { path: 'genero-diversidad', component: GeneroDiversidadComponent },
  { path: 'galeria-historica', component: GaleriaHistoricaComponent },
  { path: 'bienestar-laboral', component: BienestarLaboralComponent },
  { path: 'salud-mental', component: ProtocoloSaludMentalComponent },
  { path: '**', redirectTo: '/home' }
];

