import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { merge } from 'rxjs';
import { TableColumnModel } from '../shared/components/table/table-column.model';
import { TableComponent } from '../shared/components/table/table.component';
import { DynamicControlType } from '../shared/controls/dynamic-control/dynamic-control-type.enum';
import { CustomValidators } from '../shared/utils/cusotm-validators';
import { FinanceUtil } from '../shared/utils/finance.util';
import { DriveSummaryModel } from '../summary/summary.model';
import { UsageRowFormModel } from '../usage-table/usage-row.model';
import { DriveRowFormModel, DriveRowModel } from './drive-row.model';

@Component({
  selector: 'qab-drive-table',
  templateUrl: './drive-table.component.html',
  styleUrls: ['./drive-table.component.scss']
})
export class DriveTableComponent {

  protected tableData: TableColumnModel<DriveRowModel>[] = [
    { title: 'Wofür?', controlName: 'wofur', controlModel: { type: DynamicControlType.Text } },
    { title: 'Strecke?', controlName: 'strecke', controlModel: { type: DynamicControlType.Text } },
    { title: 'Kilometer', controlName: 'kilometer', controlModel: { type: DynamicControlType.Number } },
    {
      title: 'Betrag', controlName: 'betrag', controlModel: { type: DynamicControlType.Number }
    }
  ]

  @ViewChild(TableComponent) public table: TableComponent<DriveRowModel, DriveRowFormModel> | null = null;


  protected readonly FinanceUtils = FinanceUtil;

  protected formGroupFactory = this.createFormGroup.bind(this)

  public getSummary(): DriveSummaryModel[] {
    if (!this.table) return [];
    return this.table.formArray.getRawValue().map(model => { return { betrag: model.betrag ?? 0 } })
  }

  protected createFormGroup(): FormGroup<DriveRowFormModel> {
    const group = new FormGroup<DriveRowFormModel>({
      strecke: new FormControl(null, Validators.required),
      wofur: new FormControl(null, Validators.required),
      kilometer: new FormControl(null, Validators.required),
      betrag: new FormControl({
        value: null,
        disabled: true
      }),

    }, CustomValidators.childrenValid);
    this.trackBetrag(group);
    return group;
  }


  private trackBetrag(form: FormGroup<DriveRowFormModel>): void {
    form.controls.kilometer.valueChanges.subscribe(km => km != null ? form.controls.betrag.patchValue(FinanceUtil.calcFahrkostenPauschale(km)) : null)
  }
}
