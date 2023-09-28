import { AbstractControl, FormArray, FormControl, FormGroup } from "@angular/forms";

export type FormGroupModel<T> = {
    [key in keyof T]:
    T[key] extends object ? FormGroup<FormGroupModel<T[key]>> :
    T[key] extends Array<infer Inner> ? (Inner extends AbstractControl<any, any> ? FormArray<Inner> : FormControl<T[key] | null>)
    : FormControl<T[key] | null>
}