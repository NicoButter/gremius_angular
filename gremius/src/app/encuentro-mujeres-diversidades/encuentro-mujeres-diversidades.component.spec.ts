import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncuentroMujeresDiversidadesComponent } from './encuentro-mujeres-diversidades.component';

describe('EncuentroMujeresDiversidadesComponent', () => {
  let component: EncuentroMujeresDiversidadesComponent;
  let fixture: ComponentFixture<EncuentroMujeresDiversidadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EncuentroMujeresDiversidadesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EncuentroMujeresDiversidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
