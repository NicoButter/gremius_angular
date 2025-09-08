import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BienestarLaboralComponent } from './bienestar-laboral.component';

describe('BienestarLaboralComponent', () => {
  let component: BienestarLaboralComponent;
  let fixture: ComponentFixture<BienestarLaboralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BienestarLaboralComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BienestarLaboralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
