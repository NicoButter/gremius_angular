import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DelegadosAfiliadosComponent } from './delegados-afiliados/delegados-afiliados.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'general', component: DelegadosAfiliadosComponent },
  { path: '**', redirectTo: '/home' },
  { path: '**', redirectTo: '' }
];