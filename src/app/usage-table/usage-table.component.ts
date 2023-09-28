import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { FormGroupModel } from '../shared/form-group.model';
import { CustomValidators } from '../shared/utils/cusotm-validators';
import { UsageModel, UsageRowFormModel } from './usage-row/usage-row.model';

@Component({
  selector: 'qab-usage-table',
  templateUrl: './usage-table.component.html',
  styleUrls: ['./usage-table.component.scss']
})
export class UsageTableComponent {

  public form: FormArray<FormGroup<UsageRowFormModel>> = new FormArray<FormGroup<UsageRowFormModel>>([], CustomValidators.childrenValid);

  public ngOnInit() {
    this.form.statusChanges.subscribe(status => console.log('table', status))
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

    console.log(this.form.errors)
    this.form.controls.push(group);
    this.form.updateValueAndValidity();
  }

  protected removeRow(index: number) {
    this.form.controls.splice(index, 1);
    this.form.updateValueAndValidity();
  }
}
