import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccionSocialComponent } from './accion-social.component';

describe('AccionSocialComponent', () => {
  let component: AccionSocialComponent;
  let fixture: ComponentFixture<AccionSocialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccionSocialComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccionSocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
