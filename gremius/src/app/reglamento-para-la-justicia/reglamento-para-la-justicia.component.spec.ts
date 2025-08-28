import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReglamentoParaLaJusticiaComponent } from './reglamento-para-la-justicia.component';

describe('ReglamentoParaLaJusticiaComponent', () => {
  let component: ReglamentoParaLaJusticiaComponent;
  let fixture: ComponentFixture<ReglamentoParaLaJusticiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReglamentoParaLaJusticiaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReglamentoParaLaJusticiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
