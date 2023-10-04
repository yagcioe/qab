import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { TableColumnModel } from '../shared/components/table/table-column.model';
import { DynamicControlType } from '../shared/controls/dynamic-control/dynamic-control-type.enum';
import { FormGroupModel } from '../shared/form-group.model';
import { CustomValidators } from '../shared/utils/cusotm-validators';
import { UsageModel, UsageRowFormModel } from './usage-row/usage-row.model';

@Component({
  selector: 'qab-usage-table',
  templateUrl: './usage-table.component.html',
  styleUrls: ['./usage-table.component.scss']
})
export class UsageTableComponent {


  protected tableData: TableColumnModel<FormGroup<UsageRowFormModel>, any>[] = [
    { title: 'Was?', controlName: 'was', controlModel: { type: DynamicControlType.Text } },
    { title: 'Wofür?', controlName: 'wofur', controlModel: { type: DynamicControlType.Text } },
    { title: 'Betrag Netto', controlName: 'netto', controlModel: { type: DynamicControlType.Text } },
    { title: 'USt', controlName: 'ust', controlModel: { type: DynamicControlType.Text } },
    { title: 'errechnete?', controlName: 'calculatedUst', controlModel: { type: DynamicControlType.Text } },
    { title: 'Betrag Brutto', controlName: 'brutto', controlModel: { type: DynamicControlType.Text } },
    { title: 'Steuern Stimmen?', controlName: 'isUstCorrect', controlModel: { type: DynamicControlType.Text } },
  ]

  public form: FormArray<FormGroup<UsageRowFormModel>> = new FormArray<FormGroup<UsageRowFormModel>>([], CustomValidators.childrenValid);

  public ngOnInit() {
    this.addRow();
  }

  protected addRow() {
    const group = new FormGroup<UsageRowFormModel>({
      usageModel: new FormGroup<FormGroupModel<UsageModel>>({
        was: new FormControl(null, Validators.required),
        wofur: new FormControl(null, Validators.required),
        netto: new FormControl(null, Validators.required),
        ust: new FormControl(null, Validators.required),
        calculatedUst: new FormControl({
          value: null,
          disabled: true
        }),
        brutto: new FormControl(null, Validators.required),
      }, CustomValidators.childrenValid),
      isUstCorrect: new FormControl<boolean>(false, { nonNullable: true, validators: Validators.requiredTrue })
    }, CustomValidators.childrenValid);

    this.form.controls.push(group);
    this.form.updateValueAndValidity();
  }

  protected checkValidty(): void {
    this.form.updateValueAndValidity();
    console.log(!this.form.invalid)
    console.log(this.form.controls);

  }

  protected removeRow(index: number) {
    this.form.controls.splice(index, 1);
    this.form.updateValueAndValidity();
  }
}
