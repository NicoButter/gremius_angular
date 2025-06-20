import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SistemaSalarialComponent } from './sistema-salarial.component';

describe('SistemaSalarialComponent', () => {
  let component: SistemaSalarialComponent;
  let fixture: ComponentFixture<SistemaSalarialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SistemaSalarialComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SistemaSalarialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
