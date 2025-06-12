import { Component } from '@angular/core';
import { HeaderNavComponent } from './header-nav/header-nav.component';
import { HeroComponent } from './hero/hero.component';
import { ActualidadComponent } from './actualidad/actualidad.component';
import { SedesComponent } from './sedes/sedes.component';
import { FooterComponent } from './footer/footer.component';
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
    RouterOutlet
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gremius';
}
