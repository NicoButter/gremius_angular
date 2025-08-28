import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfiliacionesComponent } from './afiliaciones.component';

describe('AfiliacionesComponent', () => {
  let component: AfiliacionesComponent;
  let fixture: ComponentFixture<AfiliacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AfiliacionesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AfiliacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
