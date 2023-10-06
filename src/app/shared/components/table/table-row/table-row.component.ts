import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FlatFormGroupModel } from 'src/app/shared/form-group.model';
import { KeyValue } from 'src/app/shared/key-value.model';
import { TableColumnModel } from '../table-column.model';

@Component({
  selector: '[table-row]',
  templateUrl: './table-row.component.html',
  styleUrls: ['./table-row.component.scss']
})
export class TableRowComponent<TRowModel, TRowFormModel extends FlatFormGroupModel<TRowModel>> {
  protected dropdownData: KeyValue<number, string>[] = [{ key: 0, value: "0%" }, { key: 0.07, value: "7%" }, { key: 0.19, value: "19%" },]

  @Input({ required: true }) public form!: FormGroup<TRowFormModel>;
  @Input({ required: true }) public tableColumnData!: TableColumnModel<TRowModel>[];

  @Output() remove = new EventEmitter<void>();

  protected getControl<TKey extends keyof TRowModel>(controlName: TKey): FormControl<TRowFormModel[TKey]> {
    return this.form.controls[controlName as keyof typeof this.form.controls] as FormControl<TRowFormModel[TKey]>;
  }
}
