import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InpOut2Component } from './inp-out2.component';

describe('InpOut2Component', () => {
  let component: InpOut2Component;
  let fixture: ComponentFixture<InpOut2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InpOut2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InpOut2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
