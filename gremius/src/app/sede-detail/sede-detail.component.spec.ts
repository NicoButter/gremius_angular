import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SedeDetailComponent } from './sede-detail.component';

describe('SedeDetailComponent', () => {
  let component: SedeDetailComponent;
  let fixture: ComponentFixture<SedeDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SedeDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SedeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
