import { DynamicControlModel } from "../../controls/dynamic-control/dynamic-control.model";

export interface TableColumnModel<TModel, TKey extends keyof TModel = keyof TModel> {
    title: string,
    controlModel: DynamicControlModel<TModel[TKey]>
    controlName: TKey
}