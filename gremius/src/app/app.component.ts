import { Component } from '@angular/core';
import { HeaderNavComponent } from './header-nav/header-nav.component';
import { HeroComponent } from './hero/hero.component';
import { ActualidadComponent } from './actualidad/actualidad.component';
import { SedesComponent } from './sedes/sedes.component';
import { FooterComponent } from './footer/footer.component';
import { DelegadosAfiliadosComponent } from './delegados-afiliados/delegados-afiliados.component';
import { HomeComponent } from './home/home.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderNavComponent,
    HeroComponent,
    ActualidadComponent,
    SedesComponent,
    FooterComponent,
    // DelegadosAfiliadosComponent,
    HomeComponent,
    RouterOutlet
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gremius';

  getMainPadding(): string {
    const headerHeight = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--header-height') || '120', 10);
    const navbarOffset = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--navbar-offset') || '0', 10);
    return `calc(${headerHeight}px + ${navbarOffset}px + 40px)`;
  }
  
}