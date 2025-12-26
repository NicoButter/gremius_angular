import { Component, HostListener, OnInit, OnDestroy } from '@angular/core';
import { Router, RouterModule, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header-nav',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.css', './christmas-decorations.css']
})
export class HeaderNavComponent implements OnInit, OnDestroy {
  isShrunk = false;
  isMobileMenuOpen = false;
  activeDropdown: string | null = null;
  private routerSubscription: Subscription = new Subscription();

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.updateHeaderHeight();
    this.setInitialScrollState();

    // Escuchar eventos de navegación para cerrar el menú
    this.routerSubscription = this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd && this.isMobileMenuOpen) {
        this.closeMenuOnNavigation();
      }
    });
  }

  ngOnDestroy(): void {
    this.routerSubscription.unsubscribe();
  }

  @HostListener('window:scroll')
  onScroll(): void {
    const shouldShrink = window.scrollY > 50;
    if (this.isShrunk !== shouldShrink) {
      this.isShrunk = shouldShrink;
      this.updateHeaderHeight();
    }
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