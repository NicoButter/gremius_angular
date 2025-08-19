import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ContactService {
  private destinatarioSource = new BehaviorSubject<string | null>(null);
  destinatario$ = this.destinatarioSource.asObservable();

  // Mapeo de "destinatario" a su endpoint de Formspree
  private formEndpoints: Record<string, string> = {
    'gremiojudicialesrg@gmail.com': 'https://formspree.io/f/mrblvnbg',   // Río Gallegos
    'empleadosjudiciales3dejulio@hotmail.com': 'https://formspree.io/f/mnnzyenj' // Caleta Olivia
  };

  constructor(private http: HttpClient) {}

  setDestinatario(email: string) {
    this.destinatarioSource.next(email);
  }

  sendMessage(data: { name: string; email: string; message: string }, destinatario: string) {
    const endpoint = this.formEndpoints[destinatario];
    if (!endpoint) {
      throw new Error('No hay un endpoint configurado para este destinatario');
    }

    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('email', data.email);
    formData.append('message', data.message);

    return this.http.post(endpoint, formData);
  }

  resetDestinatario() {
    this.destinatarioSource.next(null);
  }
}
