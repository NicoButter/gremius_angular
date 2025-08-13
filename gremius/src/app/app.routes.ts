import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DelegadosAfiliadosComponent } from './delegados-afiliados/delegados-afiliados.component';
import { LeyParitaria3022Component } from './ley-paritaria-3022/ley-paritaria-3022.component';
import { SistemaSalarialComponent } from './sistema-salarial/sistema-salarial.component';
import { SobreNosotrosComponent } from './sobre-nosotros/sobre-nosotros.component';
import { SecretariasComponent } from './secretarias/secretarias.component';
import { SedeDetailComponent } from './sede-detail/sede-detail.component';
import { SedesComponent } from './sedes/sedes.component';


export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'general', component: DelegadosAfiliadosComponent },
  { path: 'ley-paritaria-3022', component: LeyParitaria3022Component },
  { path: 'sistema-salarial', component: SistemaSalarialComponent },
  { path: 'sobrenosotros', component: SobreNosotrosComponent },
  { path: 'secretarias', component: SecretariasComponent },
  { path: 'sedes', component: SedesComponent },
  { path: 'sedes/:id', component: SedeDetailComponent },
  { path: '**', redirectTo: '/home' },
  { path: '**', redirectTo: '' }
];
