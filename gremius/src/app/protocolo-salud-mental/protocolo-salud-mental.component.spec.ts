import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtocoloSaludMentalComponent } from './protocolo-salud-mental.component';

describe('ProtocoloSaludMentalComponent', () => {
  let component: ProtocoloSaludMentalComponent;
  let fixture: ComponentFixture<ProtocoloSaludMentalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProtocoloSaludMentalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProtocoloSaludMentalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
