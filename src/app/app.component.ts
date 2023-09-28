import { Component, ViewChild } from '@angular/core';
import { UsageTableComponent } from './usage-table/usage-table.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'qab';

  @ViewChild(UsageTableComponent) table!: UsageTableComponent;

  protected onClick(): void {
    console.log(this.table.form.getRawValue(), this.table.form.valid);

  }

}
