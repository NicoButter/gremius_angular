import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComisionActualComponent } from './comision-actual.component';

describe('ComisionActualComponent', () => {
  let component: ComisionActualComponent;
  let fixture: ComponentFixture<ComisionActualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComisionActualComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComisionActualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
