import { FormArray, FormGroup, ValidatorFn } from "@angular/forms";

export class CustomValidators {

    public static childrenValid: ValidatorFn = function (control) {
        const group = control as typeof control extends FormGroup ? FormGroup : FormArray

        const invalidChildren = [];

        for (let index in group.controls) {
            if (group.controls[index].invalid) {
                invalidChildren.push(index);
            }
        }

        return invalidChildren.length ? { childrenInvalid: invalidChildren } : null;
    }
}