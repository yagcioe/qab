import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { BrowserModule } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { AdvanceRadioGroupComponent } from './advance-radio-group/advance-radio-group.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableRowComponent } from './shared/components/table/table-row/table-row.component';
import { TableComponent } from './shared/components/table/table.component';
import { CheckboxComponent } from './shared/controls/checkbox/checkbox.component';
import { DropdownComponent } from './shared/controls/dropdown/dropdown.component';
import { DynamicControlComponent } from './shared/controls/dynamic-control/dynamic-control.component';
import { InputComponent } from './shared/controls/input/input.component';
import { RadioButtonGroupComponent } from './shared/controls/radio-button-group/radio-button-group.component';
import { UsageTableComponent } from './usage-table/usage-table.component';
import { DriveTableComponent } from './drive-table/drive-table.component';
import { SummaryComponent } from './summary/summary.component';


@NgModule({
  declarations: [
    AppComponent,
    DropdownComponent,
    InputComponent,
    CheckboxComponent,
    AdvanceRadioGroupComponent,
    RadioButtonGroupComponent,
    DynamicControlComponent,
    TableComponent,
    TableRowComponent,
    UsageTableComponent,
    DriveTableComponent,
    SummaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatRadioModule
  ],
  providers: [
    provideAnimations()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
