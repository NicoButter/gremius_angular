import { Component, HostListener, OnInit } from '@angular/core';
import { Router, RouterModule, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header-nav',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.css']
})
export class HeaderNavComponent implements OnInit {
  isShrunk = false;
  isMobileMenuOpen = false;
  activeDropdown: string | null = null;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.updateHeaderHeight();
    this.setInitialScrollState();

    // Escuchar eventos de navegación para cerrar el menú
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd && this.isMobileMenuOpen) {
        this.closeMenuOnNavigation();
      }
    });
  }

  @HostListener('window:scroll')
  onScroll(): void {
    this.isShrunk = window.scrollY > 50;
    this.updateHeaderHeight();
  }

  @HostListener('window:resize')
  onResize(): void {
    if (window.innerWidth > 768 && this.isMobileMenuOpen) {
      this.isMobileMenuOpen = false;
      document.body.style.overflow = '';
    }
    this.updateHeaderHeight();
  }

  private setInitialScrollState(): void {
    this.isShrunk = window.scrollY > 50;
    this.updateHeaderHeight();
  }

  private updateHeaderHeight(): void {
    const headerEl = document.querySelector('header');
    if (!headerEl) return;

    const headerHeight = headerEl.getBoundingClientRect().height + 'px';
    document.documentElement.style.setProperty('--header-height', headerHeight);
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    this.activeDropdown = null; // Cerrar dropdowns al abrir/cerrar el menú
    document.body.style.overflow = this.isMobileMenuOpen ? 'hidden' : '';
  }

  closeMenuOnNavigation(): void {
    this.isMobileMenuOpen = false;
    this.activeDropdown = null; // Cerrar dropdowns al navegar
    document.body.style.overflow = '';
  }

  toggleDropdown(item: string): void {
    if (window.innerWidth <= 768) {
      this.activeDropdown = this.activeDropdown === item ? null : item;
    }
  }

  isDropdownActive(item: string): boolean {
    return this.activeDropdown === item;
  }
}