import { Component, Input } from '@angular/core';
import { KeyValue } from '../../key-value.model';
import { ControlBaseDirective } from '../control-base.directive';

@Component({
  selector: 'qab-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent<TKey> extends ControlBaseDirective<TKey> {
  @Input() public data: KeyValue<TKey, string>[] = [];

}
