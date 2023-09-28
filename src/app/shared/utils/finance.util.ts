export class FinanceUtil {
    private static readonly SIGNIFICANT_DIGITS = 2;

    public static calcNetto(brutto: number, ust: number): number {
        return this.roundDigits(brutto / (1 + ust), FinanceUtil.SIGNIFICANT_DIGITS)
    }


    public static calcBrutto(netto: number, ust: number): number {
        return this.roundDigits(netto * (1 + ust), FinanceUtil.SIGNIFICANT_DIGITS)
    }

    public static calcUstNominalFromNetto(netto: number, ust: number): number {
        return this.roundDigits(netto * ust, FinanceUtil.SIGNIFICANT_DIGITS);
    }

    public static calcUstNominalFromBrutto(brutto: number, ust: number): number {
        return this.roundDigits(brutto / ust, FinanceUtil.SIGNIFICANT_DIGITS)
    }

    public static roundDigits(x: number, digits: number): number {
        return Math.round(x * Math.pow(10, digits)) / Math.pow(10, digits)
    }
}