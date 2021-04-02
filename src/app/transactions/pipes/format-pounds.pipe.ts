import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatPounds'
})
export class FormatPoundsPipe implements PipeTransform {
  public transform(pounds: number, signDisplay: string = 'auto'): string {
    return new Intl.NumberFormat('en-GB', {
      style: 'currency',
      currency: 'GBP',
      signDisplay
    } as any).format(pounds);
  }
}
