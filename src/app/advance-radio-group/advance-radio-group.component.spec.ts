import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvanceRadioGroupComponent } from './advance-radio-group.component';

describe('AdvanceRadioGroupComponent', () => {
  let component: AdvanceRadioGroupComponent;
  let fixture: ComponentFixture<AdvanceRadioGroupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdvanceRadioGroupComponent]
    });
    fixture = TestBed.createComponent(AdvanceRadioGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
