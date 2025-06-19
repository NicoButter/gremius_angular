import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelegadosAfiliadosComponent } from './delegados-afiliados.component';

describe('DelegadosAfiliadosComponent', () => {
  let component: DelegadosAfiliadosComponent;
  let fixture: ComponentFixture<DelegadosAfiliadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DelegadosAfiliadosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DelegadosAfiliadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
