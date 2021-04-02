import { Pipe, PipeTransform } from '@angular/core';

import { Transaction } from '../models';

@Pipe({
  name: 'getSum'
})
export class GetSumPipe implements PipeTransform {
  public transform(transactions: Transaction[]): number {
    return transactions.reduce((previousValue: number, currentValue: Transaction) => {
      return previousValue += currentValue.cashflow;
    }, 0);
  }
}
