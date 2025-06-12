import { Routes } from '@angular/router';
// import { HeaderComponent } from './header/header.component';
// import { NavbarComponent } from './navbar/navbar.component';
import { HeroComponent } from './hero/hero.component';
import { ActualidadComponent } from './actualidad/actualidad.component';
import { SedesComponent } from './sedes/sedes.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderNavComponent } from './header-nav/header-nav.component';

export const routes: Routes = [
    { path: '', component: HeroComponent },
    { path: 'headerNav', component: HeaderNavComponent },
    { path: 'hero', component: HeroComponent },
    { path: 'actulidad', component: ActualidadComponent },
    { path: 'sedes', component: SedesComponent },
    { path: 'footer', component: FooterComponent },
    
];
