import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LicenciaContratadosComponent } from './licencia-contratados.component';

describe('LicenciaContratadosComponent', () => {
  let component: LicenciaContratadosComponent;
  let fixture: ComponentFixture<LicenciaContratadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LicenciaContratadosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LicenciaContratadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
