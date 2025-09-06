import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GaleriaHistoricaComponent } from './galeria-historica.component';

describe('GaleriaHistoricaComponent', () => {
  let component: GaleriaHistoricaComponent;
  let fixture: ComponentFixture<GaleriaHistoricaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GaleriaHistoricaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GaleriaHistoricaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
