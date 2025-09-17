import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-historia',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './historia.component.html',
  styleUrls: ['./historia.component.css']
})
export class HistoriaComponent {
  contactData = {
    name: '',
    email: '',
    message: ''
  };

  showSuccessAlert = false;

  constructor(private http: HttpClient) {}

  sendStory() {
    const formUrl = 'https://formspree.io/f/mayplqwe'; // tu endpoint de Formspree

    this.http.post(formUrl, this.contactData, {
      headers: { 'Accept': 'application/json' }
    }).subscribe({
      next: () => {
        this.showSuccessAlert = true;
        this.contactData = { name: '', email: '', message: '' }; // reset
      },
      error: (err) => {
        console.error('Error al enviar historia', err);
      }
    });
  }
}

