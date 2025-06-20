import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecretariasComponent } from './secretarias.component';

describe('SecretariasComponent', () => {
  let component: SecretariasComponent;
  let fixture: ComponentFixture<SecretariasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecretariasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecretariasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
