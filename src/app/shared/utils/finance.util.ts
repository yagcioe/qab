import { Ust } from "../enums/ust.enum";

export class FinanceUtil {
    private static readonly SIGNIFICANT_DIGITS = 2;

    public static readonly KM_PAUSCHALE = 0.3;

    public static calcNetto(brutto: number, ust: Ust): number {
        return this.roundDigits(brutto / (1 + ust), FinanceUtil.SIGNIFICANT_DIGITS)
    }

    public static calcBrutto(netto: number, ust: Ust): number {
        return this.roundDigits(netto * (1 + ust), FinanceUtil.SIGNIFICANT_DIGITS)
    }

    public static calcUstNominalFromNetto(netto: number, ust: Ust): number {
        return this.roundDigits(netto * ust, FinanceUtil.SIGNIFICANT_DIGITS);
    }

    public static calcUstNominalFromBrutto(brutto: number, ust: Ust): number {
        return this.roundDigits(brutto / ust, FinanceUtil.SIGNIFICANT_DIGITS)
    }

    public static roundDigits(x: number, digits: number): number {
        return Math.round(x * Math.pow(10, digits)) / Math.pow(10, digits)
    }

    public static calcFahrkostenPauschale(km: number): number {
        return this.roundDigits(km * FinanceUtil.KM_PAUSCHALE, FinanceUtil.SIGNIFICANT_DIGITS)
    }

    public static sum(values: number[]): number {
        return values.reduce((prev, current) => prev + current, 0);
    }
}