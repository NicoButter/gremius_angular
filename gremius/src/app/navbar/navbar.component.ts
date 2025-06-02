import { Component, HostListener } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

isMobileMenuOpen = false;

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  @HostListener('document:click', ['$event'])
  closeMobileMenu(event: Event) {
    const target = event.target as HTMLElement;
    if (!target.closest('.nav-list') && !target.closest('.menu-toggle')) {
      this.isMobileMenuOpen = false;
    }
  }
}
