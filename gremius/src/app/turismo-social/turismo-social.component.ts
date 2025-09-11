import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-turismo-social',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './turismo-social.component.html',
  styleUrl: './turismo-social.component.css'
})
export class TurismoSocialComponent {

  // Datos extraídos y organizados del PDF (sin interfaces)
  locations = [
    {
      city: 'RÍO GALLEGOS',
      address: 'Ramón y Cajal 257',
      phone: '2966340743',
      email: 'gremiojudicialesrg@gmail.com',
      schedule: '9 a 12 hs y de 16 a 19 hs (Lunes a Viernes)',
      departments: [
        { name: 'Depto 1', capacity: 1, description: 'Cama 1 plaza, TV, placard, toallas, sábanas, WiFi' },
        { name: 'Depto 2', capacity: 4, description: '2 camas cuchetas, TV, placard, toallas, sábanas, WiFi' },
        { name: 'Depto 3', capacity: 1, description: 'Cama 1 plaza, TV, placard, toallas, sábanas, WiFi' },
        { name: 'Depto 4', capacity: 3, description: '1 cama cucheta + 1 cama 1 plaza, TV, toallas, sábanas, WiFi' },
        { name: 'Depto 5', capacity: 3, description: '1 cama matrimonial + 1 cama 1 plaza, TV, toallas, sábanas, WiFi' }
      ],
      hasSharedRoom: true,
      eventHall: {
        capacity: 50,
        rates: { day: 'S....', night: 'S....', full: 'S....' }
      }
    },
    {
      city: 'PUERTO SAN JULIÁN',
      address: '3 de Julio esquina Colón',
      phone: '2966707561',
      email: 'empleadosjudiciales3dejulio@hotmail.com',
      schedule: '9 a 12 hs y de 16 a 19 hs (Lunes a Viernes)',
      departments: [
        { name: 'Depto 1', capacity: 3, description: '3 camas 1 plaza, TV, toallas, sábanas, WiFi' },
        { name: 'Depto 2', capacity: 3, description: '1 cama 2 plazas + 1 cama 1 plaza, TV, toallas, sábanas, WiFi' },
        { name: 'Depto 3', capacity: 3, description: '3 camas 1 plaza, TV, toallas, sábanas, WiFi' }
      ],
      hasSharedRoom: true,
      eventHall: {
        capacity: 80,
        rates: { day: 'S....', night: 'S....', full: 'S....' }
      }
    },
    {
      city: 'CALETA OLIVIA',
      address: 'Venezuela 630 B° Mirador',
      phone: '2966707561',
      email: 'empleadosjudiciales3dejulio@hotmail.com',
      schedule: '9 a 12 hs y de 16 a 19 hs (Lunes a Viernes)',
      departments: [
        { name: 'Depto 1', capacity: 3, description: '3 camas 1 plaza, cocina comedor, baño, placard, TV, toallas, sábanas, WiFi, equipado completo' },
        { name: 'Depto 2', capacity: 3, description: '3 camas 1 plaza, cocina comedor, baño, placard, TV, toallas, sábanas, WiFi, equipado completo' },
        { name: 'Depto 3', capacity: 3, description: '3 camas 1 plaza, cocina comedor, baño, placard, TV, toallas, sábanas, WiFi, equipado completo' }
      ],
      hasSharedRoom: false,
      eventHall: {
        capacity: 80,
        rates: { day: 'S....', night: 'S....', full: 'S....' }
      }
    },
    {
      city: 'EL CALAFATE',
      address: 'Av. Néstor Kirchner 134 (Frente a Reserva Laguna Nimez)',
      phone: '2966340743',
      email: 'gremiojudicialesrg@gmail.com',
      schedule: '9 a 12 hs y de 16 a 19 hs (Lunes a Viernes)',
      cabins: [
        { name: 'Cabaña 1', capacity: 6, description: '3 camas cuchetas, cocina comedor, TV, toallas, sábanas, equipamiento completo, WiFi' },
        { name: 'Cabaña 2', capacity: 8, description: '3 camas cuchetas + 1 matrimonial, cocina comedor, TV, toallas, sábanas, equipamiento completo, WiFi' },
        { name: 'Cabaña 3, 4, 5 y 6', capacity: 4, description: '1 cama matrimonial + 1 cama nido (para 2), TV, toallas, sábanas, equipamiento completo, WiFi' }
      ],
      hasSharedRoom: false,
      eventHall: {
        capacity: 60,
        rates: { day: 'S....', night: 'S....', full: 'S....' }
      }
    }
  ];

  // Método opcional para abrir el PDF en nueva pestaña (alternativa al download)
  downloadPdf() {
    const link = document.createElement('a');
    link.href = 'assets/pdf/disponibilidad_cabanias-quincho.pdf';
    link.download = 'disponibilidad_cabanias-quincho.pdf';
    link.click();
  }
}