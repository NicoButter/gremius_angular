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
  { path: '**', redirectTo: '/home' },
  { path: '**', redirectTo: '' }
];
