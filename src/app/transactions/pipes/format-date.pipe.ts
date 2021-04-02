import * as moment from 'moment';

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatDate'
})
export class FormatDatePipe implements PipeTransform {
  public transform(date: string): string {
    return moment(date).format('DD/MM/YYYY');
  }
}
