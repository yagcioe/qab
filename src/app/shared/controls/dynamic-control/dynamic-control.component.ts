import { Component, Input } from '@angular/core';
import { ControlBaseDirective } from '../control-base.directive';
import { DynamicControlType } from './dynamic-control-type.enum';
import { DynamicControlModel } from './dynamic-control.model';

@Component({
  selector: 'qab-dynamic-control',
  templateUrl: './dynamic-control.component.html',
  styleUrls: ['./dynamic-control.component.scss']
})
export class DynamicControlComponent<T> extends ControlBaseDirective<any>{

  protected DynamicControlType = DynamicControlType;

  @Input({ required: true }) public model!: DynamicControlModel<T>
}
