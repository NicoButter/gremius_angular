import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GremioJubiladosJudicialesComponent } from './gremio-jubilados-judiciales.component';

describe('GremioJubiladosJudicialesComponent', () => {
  let component: GremioJubiladosJudicialesComponent;
  let fixture: ComponentFixture<GremioJubiladosJudicialesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GremioJubiladosJudicialesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GremioJubiladosJudicialesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
