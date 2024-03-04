import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InpOut1Component } from './inp-out1.component';

describe('InpOut1Component', () => {
  let component: InpOut1Component;
  let fixture: ComponentFixture<InpOut1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InpOut1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InpOut1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
