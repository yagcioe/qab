import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { BrowserModule } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { AdvanceRadioGroupComponent } from './advance-radio-group/advance-radio-group.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CheckboxComponent } from './shared/controls/checkbox/checkbox.component';
import { DropdownComponent } from './shared/controls/dropdown/dropdown.component';
import { InputComponent } from './shared/controls/input/input.component';
import { RadioButtonGroupComponent } from './shared/controls/radio-button-group/radio-button-group.component';
import { UsageRowComponent } from './usage-table/usage-row/usage-row.component';
import { UsageTableComponent } from './usage-table/usage-table.component';
import { MatRadioModule } from '@angular/material/radio';
import { DynamicControlComponent } from './shared/controls/dynamic-control/dynamic-control.component';


@NgModule({
  declarations: [
    AppComponent,
    UsageTableComponent,
    UsageRowComponent,
    DropdownComponent,
    InputComponent,
    CheckboxComponent,
    AdvanceRadioGroupComponent,
    RadioButtonGroupComponent,
    DynamicControlComponent],
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
