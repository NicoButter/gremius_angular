import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DelegadosAfiliadosComponent } from './delegados-afiliados/delegados-afiliados.component';
import { LeyParitaria3022Component } from './ley-paritaria-3022/ley-paritaria-3022.component';
import { SistemaSalarialComponent } from './sistema-salarial/sistema-salarial.component';


export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'general', component: DelegadosAfiliadosComponent },
  { path: 'ley-paritaria-3022', component: LeyParitaria3022Component },
  { path: 'sistema-salarial', component: SistemaSalarialComponent },
  { path: '**', redirectTo: '/home' },
  { path: '**', redirectTo: '' }
];