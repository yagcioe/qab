import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsageRowComponent } from './table-row.component';

describe('UsageRowComponent', () => {
  let component: UsageRowComponent;
  let fixture: ComponentFixture<UsageRowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsageRowComponent]
    });
    fixture = TestBed.createComponent(UsageRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
