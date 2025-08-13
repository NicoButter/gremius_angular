import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LicenciaPromocionComponent } from './licencia-promocion.component';

describe('LicenciaPromocionComponent', () => {
  let component: LicenciaPromocionComponent;
  let fixture: ComponentFixture<LicenciaPromocionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LicenciaPromocionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LicenciaPromocionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
