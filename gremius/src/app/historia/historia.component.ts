import { Component } from '@angular/core';
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
  showErrorAlert = false;
  isSending = false;

  constructor(private http: HttpClient) {}

  sendStory() {
    const formUrl = 'https://formly.email/submit';

    const payload = {
      access_key: 'aba22342839b48b885c4b02ea35b640a', // ✅ Key de prensa
      ...this.contactData
    };

    this.isSending = true;
    this.showSuccessAlert = false;
    this.showErrorAlert = false;

    this.http.post(formUrl, payload, {
  headers: { 'Accept': 'application/json' }, // se puede dejar o quitar
  responseType: 'text' as 'json'  // 👈 esto evita el error de parseo
}).subscribe({
  next: () => {
    this.isSending = false;
    this.showSuccessAlert = true;
    this.contactData = { name: '', email: '', message: '' }; 
  },
  error: (err) => {
    this.isSending = false;
    this.showErrorAlert = true;
    console.error('Error al enviar historia', err);
  }
});
  }
}
