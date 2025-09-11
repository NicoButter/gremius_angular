import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActividadesJubiladosComponent } from './actividades-jubilados.component';

describe('ActividadesJubiladosComponent', () => {
  let component: ActividadesJubiladosComponent;
  let fixture: ComponentFixture<ActividadesJubiladosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActividadesJubiladosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActividadesJubiladosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
