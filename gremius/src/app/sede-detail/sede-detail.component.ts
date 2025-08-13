// sede-detail.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SedesService, Sede } from '../services/sede.service';
import { SafeUrlPipe } from '../safe-url.pipe';

@Component({
  selector: 'app-sede-detail',
  standalone: true,
  imports: [CommonModule, SafeUrlPipe],
  templateUrl: './sede-detail.component.html',
  styleUrls: ['./sede-detail.component.css'],
})
export class SedeDetailComponent implements OnInit {
  sede: Sede | undefined;

  constructor(
    private route: ActivatedRoute,
    private sedesService: SedesService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.sede = this.sedesService.getSedeById(id);
      console.log('Sede cargada:', this.sede); 
    }
  }
}