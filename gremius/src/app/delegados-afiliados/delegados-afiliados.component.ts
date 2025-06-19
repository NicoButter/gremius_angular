import { Component } from '@angular/core';

@Component({
  selector: 'app-delegados-afiliados',
  standalone: true,
  imports: [],
  templateUrl: './delegados-afiliados.component.html',
  styleUrls: ['./delegados-afiliados.component.css']
})
export class DelegadosAfiliadosComponent {
  actualizarDatos(): void {
    alert('Funcionalidad para actualizar datos no implementada. Redirigir a formulario.');
  }

  conocerMas(): void {
    alert('Funcionalidad para conocer más no implementada. Redirigir a sección informativa.');
  }

  descargarEstatuto(): void {
    const link = document.createElement('a');
    link.href = 'assets/docs/estatuto.pdf';
    link.download = 'Estatuto_Gremio_Judicial.pdf';
    link.click();
  }
}