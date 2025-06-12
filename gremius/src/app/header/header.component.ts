// import { Component, HostListener, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-header',
//   standalone: true,
//   imports: [],
//   templateUrl: './header.component.html',
//   styleUrls: ['./header.component.css']
// })
// export class HeaderComponent implements OnInit {

//   isShrunk: boolean = false;
  
//   constructor() {}

//     ngOnInit(): void {
//       this.updateNavbarPosition();
//     }

//     @HostListener('window:scroll', ['$event'])
//     onScroll(): void {
//       const header = document.querySelector('header');
//       if (header) {
//         if (window.scrollY > 50) { // Ajusta este valor según cuándo quieres que el header se encoja
//           header.classList.add('shrink');
//           document.documentElement.style.setProperty('--header-height', '60px');
//         } else {
//           header.classList.remove('shrink');
//           document.documentElement.style.setProperty('--header-height', '80px');
//         }
//       }
//   }

//   private updateNavbarPosition(): void {
//     const header = document.querySelector('header');
//     if (header) {
//       if (header.classList.contains('shrink')) {
//         document.documentElement.style.setProperty('--header-height', '60px');
//       } else {
//         document.documentElement.style.setProperty('--header-height', '80px');
//       }
//     }
//   }
// }