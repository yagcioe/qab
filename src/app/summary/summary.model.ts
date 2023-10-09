import { Ust } from "../shared/enums/ust.enum";

export interface SummaryModel {
    netto: number,
    ust: Ust,
}

export interface DriveSummaryModel {
    betrag: number,
}

