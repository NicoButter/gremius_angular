import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EfemeridesComponent } from './efemerides.component';

describe('EfemeridesComponent', () => {
  let component: EfemeridesComponent;
  let fixture: ComponentFixture<EfemeridesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EfemeridesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EfemeridesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should calculate days until efeméride correctly', () => {
    const dias = component.calcularDiasHasta(1, 1, 15, 1);
    expect(dias).toBeGreaterThanOrEqual(0);
  });

  it('should have all 12 months', () => {
    expect(component.mesesDelAnio.length).toBe(12);
  });

  it('should have efemérides data', () => {
    expect(component.efemerides.length).toBeGreaterThan(0);
  });
});
