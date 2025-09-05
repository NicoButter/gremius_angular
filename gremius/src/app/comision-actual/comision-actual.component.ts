import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-comision-actual',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './comision-actual.component.html',
  styleUrls: ['./comision-actual.component.css'],
})
export class ComisionActualComponent {
  comision = {
    period: '2025 / 2028',
    directiva: [
      { name: 'Juan Franco Mascheroni', role: 'Secretario General', location: 'El Calafate' },
      { name: 'Marianela Raquel Contreras', role: 'Secretaria Adjunta', location: 'Río Gallegos' },
      { name: 'Cynthia Ruth Picón', role: 'Secretaria Adjunta Suplente', location: 'El Calafate' },
      { name: 'Héctor Horacio Páez (Toti)', role: 'Secretario Gremial', location: 'Río Turbio' },
      { name: 'Gastón J. M. Perpignan', role: 'Secretario Gremial Suplente', location: 'El Calafate' },
      { name: 'Graciela Edit Elero', role: 'Secretaria de Administración y Actas', location: 'Río Gallegos' },
      { name: 'Daiana Elizabeth Vello', role: 'Secretaria de Administración y Actas Suplente', location: 'Río Gallegos' },
      { name: 'Fernando Horacio Abeldaño', role: 'Secretario de Finanzas', location: 'Río Gallegos' },
      { name: 'Emilio Roberto Felgueroso', role: 'Secretario de Finanzas Suplente', location: 'Río Gallegos' },
      { name: 'Marcelo Joaquín González', role: 'Secretario de Prensa y Difusión', location: 'El Calafate' },
      { name: 'José Luis Nievas', role: 'Secretario de Prensa y Difusión Suplente', location: 'Puerto Deseado' },
      { name: 'Fernando Ramón Opazo', role: 'Secretario de Capacitación Laboral y Gremial', location: 'Río Gallegos' },
      { name: 'Florencia Milostic Ampuero', role: 'Secretaria de Capacitación Laboral y Gremial Suplente', location: 'Río Gallegos' },
      { name: 'Lorena Andrea Roldán', role: 'Secretaria de Acción Social', location: 'Río Gallegos' },
      { name: 'Sandra Viviana Larsen', role: 'Secretaria de Acción Social Suplente', location: 'Puerto Santa Cruz' },
      { name: 'Alejandro Ramón Paolazzi', role: 'Secretario de Organización', location: 'Pico Truncado' },
      { name: 'Lionel Norberto Pedernera', role: 'Secretario de Organización Suplente', location: 'Puerto San Julián' },
      { name: 'Lorena Bettina Behm', role: 'Secretaria de Derechos Humanos', location: 'Puerto San Julián' },
      { name: 'Mauro Enrique Arias', role: 'Secretario de Derechos Humanos Suplente', location: 'Las Heras' },
    ],
    congresales: [
      { name: 'Juan Franco Mascheroni', role: 'Secretario General', location: '' },
      { name: 'Laura Vanesa Berra', role: 'Titular', location: 'Las Heras' },
      { name: 'Luis Armando López', role: 'Suplente', location: 'Puerto Santa Cruz' },
      { name: 'Blanca Cecilia Muñoz Barría', role: 'Suplente', location: 'Gobernador Gregores' },
      { name: 'Mirna Yanina Larrosa', role: 'Suplente', location: 'Piedra Buena' },
    ],
  };
}