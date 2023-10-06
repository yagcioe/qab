import { FormControl, FormGroup } from "@angular/forms";
import { FormGroupModel } from "src/app/shared/form-group.model";

export interface UsageRowModel {
    was: string,
    wofur: string,
    netto: number,
    ust: number,
    calculatedUst: number,
    brutto: number
    isUstCorrect: boolean
}

export interface UsageRowFormModel extends FormGroupModel<UsageRowModel> {
    isUstCorrect: FormControl<boolean>
 }