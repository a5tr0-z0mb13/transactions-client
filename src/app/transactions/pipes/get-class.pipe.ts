import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getClass'
})
export class GetClassPipe implements PipeTransform {
  public transform(cashflow: number): string {
    return cashflow === 0 ? '' : cashflow > 0 ? 'positive' : 'negative';
  }
}
