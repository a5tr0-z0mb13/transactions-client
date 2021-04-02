import { FormatPoundsPipe } from './format-pounds.pipe';

import { cashflows, values } from '../spec-data';

describe('FormatPoundsPipe', () => {
  describe('constructor', () => {
    it('should create an instance of the Pipe', () => {
      const pipe: FormatPoundsPipe = new FormatPoundsPipe();
      expect(pipe).toBeTruthy();
    });
  })

  describe('transform', () => {
    it('should format a value', () => {
      const pipe: FormatPoundsPipe = new FormatPoundsPipe();
      values.forEach((value: any) => expect(pipe.transform(value.value)).toEqual(value.expected));
    });

    it('should format a cashflow', () => {
      const pipe: FormatPoundsPipe = new FormatPoundsPipe();
      cashflows.forEach((cashflow: any) => expect(pipe.transform(cashflow.value, 'exceptZero')).toEqual(cashflow.expected));
    });
  });
});
