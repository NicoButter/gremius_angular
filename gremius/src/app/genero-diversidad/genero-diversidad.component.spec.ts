import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneroDiversidadComponent } from './genero-diversidad.component';

describe('GeneroDiversidadComponent', () => {
  let component: GeneroDiversidadComponent;
  let fixture: ComponentFixture<GeneroDiversidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GeneroDiversidadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeneroDiversidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
