import { Component, Input } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { FlatFormGroupModel } from '../../form-group.model';
import { CustomValidators } from '../../utils/cusotm-validators';
import { TableColumnModel } from './table-column.model';

@Component({
  selector: 'qab-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent<TModel, TFormModel extends FlatFormGroupModel<TModel>> {

  @Input({ required: true }) formGroupFactory!: () => FormGroup<TFormModel>;
  @Input({ required: true }) tableColumnData!: TableColumnModel<TModel>[];

  public formArray = new FormArray<FormGroup<TFormModel>>([], CustomValidators.childrenValid);

  public ngOnInit() {
    this.addRow();
    console.log(this.tableColumnData);
  }

  protected addRow() {
    const group = this.formGroupFactory();

    this.formArray.controls.push(group);
    this.formArray.updateValueAndValidity();
  }

  protected removeRow(index: number) {
    this.formArray.controls.splice(index, 1);
    this.formArray.updateValueAndValidity();
  }
}
