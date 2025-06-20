import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeyParitaria3022Component } from './ley-paritaria-3022.component';

describe('LeyParitaria3022Component', () => {
  let component: LeyParitaria3022Component;
  let fixture: ComponentFixture<LeyParitaria3022Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeyParitaria3022Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeyParitaria3022Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
