// sedes.component.ts
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SedesService, Sede } from '../services/sede.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sedes',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './sedes.component.html',
  styleUrls: ['./sedes.component.css'],
})
export class SedesComponent implements OnInit {
  sedes: Sede[] = [];

  constructor(private sedesService: SedesService) {}

  ngOnInit(): void {
    this.sedes = this.sedesService.getSedes();
  }
}