import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DerechoLaboralComponent } from './derecho-laboral.component';

describe('DerechoLaboralComponent', () => {
  let component: DerechoLaboralComponent;
  let fixture: ComponentFixture<DerechoLaboralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DerechoLaboralComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DerechoLaboralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
