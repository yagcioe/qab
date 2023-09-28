import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsageTableComponent } from './usage-table/usage-table.component';
import { UsageRowComponent } from './usage-table/usage-row/usage-row.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { DropdownComponent } from './shared/controls/dropdown/dropdown.component';
import { provideAnimations } from '@angular/platform-browser/animations';
import { InputComponent } from './shared/controls/input/input.component';
import { CheckboxComponent } from './shared/controls/checkbox/checkbox.component';
import { MatCheckboxModule } from '@angular/material/checkbox';

@NgModule({
  declarations: [
    AppComponent,
    UsageTableComponent,
    UsageRowComponent,
    DropdownComponent,
    InputComponent,
    CheckboxComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    MatCheckboxModule,
  ],
  providers: [
    provideAnimations()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
