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
    document.documentElement.style.setProperty('--navbar-offset', '0px'); // Inicial
  }

 @HostListener('window:scroll', ['$event'])
onScroll(): void {
  this.isShrunk = window.scrollY > 50;
  const headerHeight = this.isShrunk ? '50px' : '120px';
  document.documentElement.style.setProperty('--header-height', headerHeight);
}

toggleMobileMenu(): void {
  this.isMobileMenuOpen = !this.isMobileMenuOpen;
}
}