import { KeyValue } from "../../key-value.model";
import { DynamicControlType } from "./dynamic-control-type.enum";

export interface DynamicControlModel<T> {
    type: DynamicControlType
    dropdownData?: KeyValue<T, string>[]
}
