import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { merge } from 'rxjs';
import { TableColumnModel } from '../shared/components/table/table-column.model';
import { DynamicControlType } from '../shared/controls/dynamic-control/dynamic-control-type.enum';
import { CustomValidators } from '../shared/utils/cusotm-validators';
import { FinanceUtil } from '../shared/utils/finance.util';
import { UsageRowFormModel, UsageRowModel } from './usage-row.model';

@Component({
  selector: 'qab-usage-table-new',
  templateUrl: './usage-table-new.component.html',
  styleUrls: ['./usage-table-new.component.scss']
})
export class UsageTableNewComponent {

  protected tableData: TableColumnModel<UsageRowModel>[] = [
    { title: 'Was?', controlName: 'was', controlModel: { type: DynamicControlType.Text } },
    { title: 'Wofür?', controlName: 'wofur', controlModel: { type: DynamicControlType.Text } },
    { title: 'Betrag Netto', controlName: 'netto', controlModel: { type: DynamicControlType.Number } },
    {
      title: 'USt', controlName: 'ust', controlModel: {
        type: DynamicControlType.Dropdown,
        dropdownData: [{ key: 0, value: "0%" }, { key: 0.07, value: "7%" }, { key: 0.19, value: "19%" }]
      }
    },
    { title: 'errechnete?', controlName: 'calculatedUst', controlModel: { type: DynamicControlType.Number } },
    { title: 'Betrag Brutto', controlName: 'brutto', controlModel: { type: DynamicControlType.Number } },
    { title: 'Steuern Stimmen?', controlName: 'isUstCorrect', controlModel: { type: DynamicControlType.Checkbox } },
  ]

  protected formGroupFactory = this.createFormGroup.bind(this)

  protected createFormGroup(): FormGroup<UsageRowFormModel> {
    const group = new FormGroup<UsageRowFormModel>({
      was: new FormControl(null, Validators.required),
      wofur: new FormControl(null, Validators.required),
      netto: new FormControl(null, Validators.required),
      ust: new FormControl(null, Validators.required),
      calculatedUst: new FormControl({
        value: null,
        disabled: true
      }),
      brutto: new FormControl(null, Validators.required),
      isUstCorrect: new FormControl<boolean>(false, { nonNullable: true, validators: Validators.requiredTrue })
    }, CustomValidators.childrenValid);
    this.trackUst(group);
    this.trackUstCorrect(group);
    return group;
  }


  private trackUst(form: FormGroup<UsageRowFormModel>): void {
    form.controls.brutto.valueChanges.subscribe(() => {
      const ust = form.controls.ust.getRawValue();
      const brutto = form.controls.brutto.getRawValue();
      console.log(ust, brutto);
      if (ust === null || brutto === null) return;

      form.controls.netto.patchValue(FinanceUtil.calcNetto(brutto, ust), { emitEvent: false })
    });

    merge(form.controls.netto.valueChanges, form.controls.ust.valueChanges)
      .subscribe(() => {
        const ust = form.controls.ust.getRawValue();
        const netto = form.controls.netto.getRawValue();
        console.log(ust, netto);
        if (ust === null || netto === null) return;

        form.controls.brutto.patchValue(FinanceUtil.calcBrutto(netto, ust), { emitEvent: false })
      });

    merge(form.controls.netto.valueChanges, form.controls.brutto.valueChanges, form.controls.ust.valueChanges)
      .subscribe(() => {
        const ust = form.controls.ust.getRawValue();
        const netto = form.controls.netto.getRawValue();
        const brutto = form.controls.brutto.getRawValue();
        console.log("change");
        if (ust !== null && netto !== null) {
          form.controls.calculatedUst.patchValue(FinanceUtil.calcUstNominalFromNetto(netto, ust))
          return;
        }
        if (ust !== null && brutto !== null) {
          form.controls.calculatedUst.patchValue(FinanceUtil.calcUstNominalFromBrutto(brutto, ust))
          return;
        }
      })
  }

  private trackUstCorrect(form: FormGroup<UsageRowFormModel>): void {
    form.controls.isUstCorrect.valueChanges.subscribe(checked => {
      const controls: (keyof FormGroup<UsageRowFormModel>['controls'])[] = [
        'brutto', 'netto', 'ust', 'was', 'wofur'
      ];

      if (checked && controls.some(control => form.controls[control].invalid)) {
        form.controls.isUstCorrect.patchValue(false, { emitEvent: false });
        form.markAllAsTouched();
        return;
      }

      controls.forEach(control =>
        checked ? form.controls[control].disable() : form.controls[control].enable()
      );

    })
  }

}
