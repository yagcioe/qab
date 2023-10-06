import { FormGroupModel } from "../shared/form-group.model";

export interface DriveRowModel {
    wofur: string,
    strecke: string,
    kilometer: number,
    betrag: number
}

export interface DriveRowFormModel extends FormGroupModel<DriveRowModel> { }