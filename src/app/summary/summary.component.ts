import { Component, Input } from '@angular/core';
import { Ust } from '../shared/enums/ust.enum';
import { FinanceUtil } from '../shared/utils/finance.util';
import { DriveSummaryModel, SummaryModel } from './summary.model';

@Component({
  selector: 'qab-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent {

  @Input() public summaries: SummaryModel[] = []
  @Input() public driveSummaries: DriveSummaryModel[] = []

  protected get netto(): number {
    return FinanceUtil.sum(this.summaries.map(summary => summary.netto))
  }

  protected get brutto(): number {
    return FinanceUtil.sum(this.summaries.map(summary => FinanceUtil.calcBrutto(summary.netto, summary.ust))) + FinanceUtil.sum(this.driveSummaries.map(summary => summary.betrag))
  }

  protected get nineteen(): number {
    return this.calcNominalOf(Ust.Nineteen);
  }

  protected get seven(): number {
    return this.calcNominalOf(Ust.Seven);
  }

  private summaryOf(ust: Ust): SummaryModel[] {
    return this.summaries.filter(summary => summary.ust === ust);
  }

  private calcNominalOf(ust: Ust) {
    return FinanceUtil.sum(this.summaryOf(ust).map(summary => FinanceUtil.calcUstNominalFromNetto(summary.netto, ust)));

  }
}
