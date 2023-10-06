import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriveTableComponent } from './drive-table.component';

describe('DriveTableComponent', () => {
  let component: DriveTableComponent;
  let fixture: ComponentFixture<DriveTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DriveTableComponent]
    });
    fixture = TestBed.createComponent(DriveTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
