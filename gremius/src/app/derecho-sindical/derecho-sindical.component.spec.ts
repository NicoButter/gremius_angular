import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DerechoSindicalComponent } from './derecho-sindical.component';

describe('DerechoSindicalComponent', () => {
  let component: DerechoSindicalComponent;
  let fixture: ComponentFixture<DerechoSindicalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DerechoSindicalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DerechoSindicalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
