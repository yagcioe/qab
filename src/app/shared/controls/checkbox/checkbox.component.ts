import { Component } from '@angular/core';
import { ControlBaseDirective } from '../control-base.directive';

@Component({
  selector: 'qab-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent extends ControlBaseDirective<boolean> {

}
