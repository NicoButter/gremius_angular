import { Component, HostListener, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header-nav',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.css']
})
export class HeaderNavComponent implements OnInit {
  isShrunk: boolean = false;
  isMobileMenuOpen: boolean = false;

  ngOnInit(): void {
    document.documentElement.style.setProperty('--header-height', '120px'); // Inicial
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(): void {
    this.isShrunk = window.scrollY > 50;
    document.documentElement.style.setProperty('--header-height', this.isShrunk ? '70px' : '120px');
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }
}