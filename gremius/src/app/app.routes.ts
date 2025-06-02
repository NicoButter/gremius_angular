import { Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeroComponent } from './hero/hero.component';
import { ActualidadComponent } from './actualidad/actualidad.component';
import { SedesComponent } from './sedes/sedes.component';
import { FooterComponent } from './footer/footer.component';

export const routes: Routes = [
    { path: '', component: HeroComponent },
    { path: 'header', component: HeaderComponent },
    { path: 'vavbar', component: NavbarComponent },
    { path: 'hero', component: HeroComponent },
    { path: 'actulidad', component: ActualidadComponent },
    { path: 'sedes', component: SedesComponent },
    { path: 'footer', component: FooterComponent }
];
