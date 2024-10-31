import { Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeroComponent } from './hero/hero.component';

export const routes: Routes = [
    { path: 'header', component: HeaderComponent },
    { path: 'vavbar', component: NavbarComponent },
    { path: 'hero', component: HeroComponent }
];
