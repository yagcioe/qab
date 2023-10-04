import { Component, Input } from '@angular/core';
import { AbstractControl, FormArray, FormGroup } from '@angular/forms';
import { FormGroupModel } from '../../form-group.model';
import { CustomValidators } from '../../utils/cusotm-validators';
import { TableColumnModel } from './table-column.model';

@Component({
  selector: 'qab-table',
  templateUrl: './qab-table.component.html',
  styleUrls: ['./qab-table.component.scss']
})
export class TableComponent<TModel, TFormModel extends AbstractControl = FormGroup<FormGroupModel<TModel>>> {

  @Input({ required: true }) formGroupFactory!: () => TFormModel;
  @Input({ required: true }) tableColumnData!: TableColumnModel<any, TFormModel>[];

  public form = new FormArray<TFormModel>([], CustomValidators.childrenValid);

  public ngOnInit() {
    this.addRow();
  }

  protected addRow() {
    const group = this.formGroupFactory();

    this.form.controls.push(group);
    this.form.updateValueAndValidity();
  }

  protected removeRow(index: number) {
    this.form.controls.splice(index, 1);
    this.form.updateValueAndValidity();
  }
}
