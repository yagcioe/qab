import { KeyValue } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Advance } from '../shared/enums/advance.enum';

@Component({
  selector: 'qab-advance-radio-group',
  templateUrl: './advance-radio-group.component.html',
  styleUrls: ['./advance-radio-group.component.scss']
})
export class AdvanceRadioGroupComponent {
  protected data: KeyValue<Advance, string>[] = [{ key: Advance.No, value: "Kein Vorschuss" }, { key: Advance.Cash, value: "Vorschuss aus Kasse" }, { key: Advance.Credit, value: "Solde Kreditkarte" }]

  protected selectionControl = new FormControl<Advance | null>(null);
}
