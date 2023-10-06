import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsageTableNewComponent } from './usage-table-new.component';

describe('UsageTableNewComponent', () => {
  let component: UsageTableNewComponent;
  let fixture: ComponentFixture<UsageTableNewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsageTableNewComponent]
    });
    fixture = TestBed.createComponent(UsageTableNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
