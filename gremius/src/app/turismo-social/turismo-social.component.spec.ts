import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TurismoSocialComponent } from './turismo-social.component';

describe('TurismoSocialComponent', () => {
  let component: TurismoSocialComponent;
  let fixture: ComponentFixture<TurismoSocialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TurismoSocialComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TurismoSocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
