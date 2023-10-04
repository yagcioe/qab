import { DynamicControlModel } from "../../controls/dynamic-control/dynamic-control.model";

export interface TableColumnModel<TFormGroup> {
    title: string,
    controlModel: DynamicControlModel<TFormGroup[TKey]>
    controlAccessor: TKey | () => TFormGroup[TKey]
}