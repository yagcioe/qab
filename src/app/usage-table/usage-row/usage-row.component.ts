import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { distinct, merge } from 'rxjs';
import { ValidateableComponent } from 'src/app/shared/classes/validateable-component.interface';
import { KeyValue } from 'src/app/shared/key-value.model';
import { FinanceUtil } from 'src/app/shared/utils/finance.util';
import { UsageRowFormModel, UsageRowModel } from './usage-row.model';

@Component({
  selector: '[usage-row]',
  templateUrl: './usage-row.component.html',
  styleUrls: ['./usage-row.component.scss']
})
export class UsageRowComponent implements OnInit {
  protected dropdownData: KeyValue<number, string>[] = [{ key: 0, value: "0%" }, { key: 0.07, value: "7%" }, { key: 0.19, value: "19%" },]

  protected get usageContols() {
    return this.form.controls.usageModel.controls
  }

  @Input({ required: true }) public form!: FormGroup<UsageRowFormModel>;

  @Output() remove = new EventEmitter<void>();

  public ngOnInit() {
    this.trackUst();
    this.trackUstCorrect();
    this.form.statusChanges.subscribe(status => console.log('row', status))
  }

  private trackUst(): void {
    this.usageContols.brutto.valueChanges.subscribe(() => {
      const ust = this.usageContols.ust.getRawValue();
      const brutto = this.usageContols.brutto.getRawValue();
      console.log(ust, brutto);
      if (ust === null || brutto === null) return;

      this.usageContols.netto.patchValue(FinanceUtil.calcNetto(brutto, ust), { emitEvent: false })
    });

    merge(this.usageContols.netto.valueChanges, this.usageContols.ust.valueChanges)
      .subscribe(() => {
        const ust = this.usageContols.ust.getRawValue();
        const netto = this.usageContols.netto.getRawValue();
        console.log(ust, netto);
        if (ust === null || netto === null) return;

        this.usageContols.brutto.patchValue(FinanceUtil.calcBrutto(netto, ust), { emitEvent: false })
      });

    merge(this.usageContols.netto.valueChanges, this.usageContols.brutto.valueChanges, this.usageContols.ust.valueChanges)
      .subscribe(() => {
        const ust = this.usageContols.ust.getRawValue();
        const netto = this.usageContols.netto.getRawValue();
        const brutto = this.usageContols.brutto.getRawValue();
        console.log("change");
        if (ust !== null && netto !== null) {
          this.usageContols.calculatedUst.patchValue(FinanceUtil.calcUstNominalFromNetto(netto, ust))
          return;
        }
        if (ust !== null && brutto !== null) {
          this.usageContols.calculatedUst.patchValue(FinanceUtil.calcUstNominalFromBrutto(brutto, ust))
          return;
        }
      })
  }

  private trackUstCorrect(): void {
    this.form.controls.isUstCorrect.valueChanges.subscribe(checked => {
      const controls: (keyof FormGroup<UsageRowFormModel>['controls']['usageModel']['controls'])[] = [
        'brutto', 'netto', 'ust', 'was', 'wofur'
      ];

      if (checked && this.form.controls.usageModel.invalid) {
        this.form.controls.isUstCorrect.patchValue(false, { emitEvent: false });
        return;
      }

      controls.forEach(control =>
        checked ? this.usageContols[control].disable() : this.usageContols[control].enable()
      );

    })
  }


}
