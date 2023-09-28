import { Directive, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Directive()
export abstract class ControlBaseDirective<T> {
  @Input({ required: true }) public control!: FormControl<T>;
}
