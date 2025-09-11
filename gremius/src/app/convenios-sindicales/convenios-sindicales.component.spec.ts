import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConveniosSindicalesComponent } from './convenios-sindicales.component';

describe('ConveniosSindicalesComponent', () => {
  let component: ConveniosSindicalesComponent;
  let fixture: ComponentFixture<ConveniosSindicalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConveniosSindicalesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConveniosSindicalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
