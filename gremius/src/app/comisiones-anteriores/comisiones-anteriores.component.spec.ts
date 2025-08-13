import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComisionesAnterioresComponent } from './comisiones-anteriores.component';

describe('ComisionesAnterioresComponent', () => {
  let component: ComisionesAnterioresComponent;
  let fixture: ComponentFixture<ComisionesAnterioresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComisionesAnterioresComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComisionesAnterioresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
