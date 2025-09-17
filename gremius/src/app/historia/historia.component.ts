import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-historia',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './historia.component.html',
  styleUrls: ['./historia.component.css']
})
export class HistoriaComponent implements OnInit {
  showSuccessAlert = false;
  contactData = { name: '', email: '', message: '' };
  destinatario = 'prensa.judicialessantacruz@gmail.com'; // destinatario por default

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params['success'] === 'true') {
        this.showSuccessAlert = true;
        setTimeout(() => {
          this.showSuccessAlert = false;
          this.back();
        }, 3000);
      }
    });
  }

  back() {
    this.contactData = { name: '', email: '', message: '' };
  }

  get formAction(): string {
    return this.destinatario ? `https://formsubmit.co/${this.destinatario}` : '';
  }
}
