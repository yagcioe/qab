import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsageTableComponent } from './usage-table.component';

describe('UsageTableNewComponent', () => {
  let component: UsageTableComponent;
  let fixture: ComponentFixture<UsageTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsageTableComponent]
    });
    fixture = TestBed.createComponent(UsageTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
