import { FormControl } from "@angular/forms";
import { FormGroupModel } from "src/app/shared/form-group.model";

export interface UsageModel {
    was: string,
    wofur: string,
    netto: number,
    ust: number,
    calculatedUst: number,
    brutto: number
}

export interface UsageRowModel {
    usageModel: UsageModel,
    isUstCorrect: boolean
}

export interface UsageRowFormModel extends FormGroupModel<UsageRowModel> {
    isUstCorrect: FormControl<boolean>
 }