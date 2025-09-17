import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsejoMagistraturaComponent } from './consejo-magistratura.component';

describe('ConsejoMagistraturaComponent', () => {
  let component: ConsejoMagistraturaComponent;
  let fixture: ComponentFixture<ConsejoMagistraturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsejoMagistraturaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsejoMagistraturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
