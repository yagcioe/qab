import { Component, Input } from '@angular/core';
import { ControlBaseDirective } from '../control-base.directive';

@Component({
  selector: 'qab-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent<T> extends ControlBaseDirective<T> {
  @Input({ required: true }) public type!: string;
}
