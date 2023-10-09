import { Component, ViewChild } from '@angular/core';
import { DriveTableComponent } from './drive-table/drive-table.component';
import { DriveSummaryModel, SummaryModel } from './summary/summary.model';
import { UsageTableComponent } from './usage-table/usage-table.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @ViewChild(UsageTableComponent) public usageTable: UsageTableComponent | null = null;
  @ViewChild(DriveTableComponent) public driveTable: DriveTableComponent | null = null;

  protected usageSummary(): SummaryModel[] {
    if (!this.usageTable) return []
    return this.usageTable.getSummary();
  }

  protected driveSummary(): DriveSummaryModel[] {
    if (!this.driveTable) return []
    return this.driveTable.getSummary();
  }
}
