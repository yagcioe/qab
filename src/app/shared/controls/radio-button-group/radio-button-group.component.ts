import { Component, Input } from '@angular/core';
import { KeyValue } from '../../key-value.model';
import { ControlBaseDirective } from '../control-base.directive';

@Component({
  selector: 'qab-radio-button-group',
  templateUrl: './radio-button-group.component.html',
  styleUrls: ['./radio-button-group.component.scss']
})
export class RadioButtonGroupComponent<TKey> extends ControlBaseDirective<TKey> {

  @Input() public data: KeyValue<TKey, string>[] = [];
}
