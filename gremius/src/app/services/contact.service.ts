import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';


@Injectable({ providedIn: 'root' })
export class ContactService {
  private destinatarioSource = new BehaviorSubject<string | null>(null);
  destinatario$ = this.destinatarioSource.asObservable();

  constructor(private http: HttpClient) {}

  setDestinatario(email: string) {
    this.destinatarioSource.next(email);
  }

  sendMessage(data: { name: string; email: string; message: string }, destinatario: string) {
    const formData = new FormData();
    formData.append('destinatario', destinatario);
    formData.append('name', data.name);
    formData.append('email', data.email);
    formData.append('message', data.message);

    return this.http.post('https://formspree.io/f/movaerny', formData);
  }

  resetDestinatario() {
    this.destinatarioSource.next(null);
  }
}
