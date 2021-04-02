import { Transaction, TransactionType } from './models';

export const response: any = {"transactions":[{"cashflow":32000,"date":"2019-01-01T09:45:00.000Z","id":5,"type":"deposit","value":32000},{"cashflow":-5005,"date":"2019-01-02T09:34:02.000Z","id":17,"security":"Carr's","shares":317,"type":"buy","value":5005},{"cashflow":-808,"date":"2019-01-02T10:05:16.345Z","id":24,"security":"Britvic","shares":618,"type":"buy","value":808},{"cashflow":-261,"date":"2019-01-02T11:15:55.038Z","id":25,"security":"J Sainsbury","shares":19,"type":"buy","value":261},{"cashflow":-209,"date":"2019-01-02T12:00:45.358Z","id":29,"security":"Scs","shares":23,"type":"buy","value":209},{"cashflow":-116,"date":"2019-01-02T14:30:00.155Z","id":33,"security":"Pets At Home","shares":42,"type":"buy","value":116},{"cashflow":-240,"date":"2019-01-02T15:59:40.111Z","id":35,"security":"Bt","shares":20,"type":"buy","value":240},{"cashflow":227,"date":"2019-02-04T10:30:55.999Z","id":101,"security":"Scs","shares":-50,"type":"sell","value":227},{"cashflow":-2920,"date":"2019-02-05T10:00:00.000Z","id":115,"security":"Games Workshop","shares":90,"type":"buy","value":2920},{"cashflow":2965,"date":"2019-02-05T10:01:09.835Z","id":116,"security":"Games Workshop","shares":-60,"type":"sell","value":2965},{"cashflow":-2955,"date":"2019-02-05T11:23:11.235Z","id":120,"security":"Games Workshop","shares":75,"type":"buy","value":2955},{"cashflow":206,"date":"2019-05-04T12:18:55.813Z","id":245,"security":"Bt","shares":-15,"type":"sell","value":206},{"cashflow":-1000,"date":"2019-11-13T12:03:17.584Z","id":596,"type":"withdrawal","value":1000},{"cashflow":193,"date":"2019-11-27T15:59:07.054Z","id":601,"security":"Bt","shares":-4,"type":"sell","value":193},{"cashflow":158,"date":"2019-12-12T14:08:19.954Z","id":665,"security":"Carr's","shares":-31,"type":"sell","value":158},{"cashflow":228,"date":"2020-01-29T09:49:37.185Z","id":798,"security":"Pets At Home","shares":-128,"type":"sell","value":228},{"cashflow":-550,"date":"2020-01-29T09:50:28.009Z","id":799,"type":"withdrawal","value":550}]}

export const transactions: Transaction[] = [
  new Transaction(5, TransactionType.Deposit, '2019-01-01T09:45:00.000Z', 320, 320),
  new Transaction(17, TransactionType.Buy, '2019-01-02T09:34:02.000Z', 50.05, -50.05, 'Carr\'s', 317),
  new Transaction(24, TransactionType.Buy, '2019-01-02T10:05:16.345Z', 8.08, -8.08, 'Britvic', 618),
  new Transaction(25, TransactionType.Buy, '2019-01-02T11:15:55.038Z', 2.61, -2.61, 'J Sainsbury', 19),
  new Transaction(29, TransactionType.Buy, '2019-01-02T12:00:45.358Z', 2.09, -2.09, 'Scs', 23),
  new Transaction(33, TransactionType.Buy, '2019-01-02T14:30:00.155Z', 1.16, -1.16, 'Pets At Home', 42),
  new Transaction(35, TransactionType.Buy, '2019-01-02T15:59:40.111Z', 2.4, -2.4, 'Bt', 20),
  new Transaction(101, TransactionType.Sell, '2019-02-04T10:30:55.999Z', 2.27, 2.27, 'Scs', -50),
  new Transaction(115, TransactionType.Buy, '2019-02-05T10:00:00.000Z', 29.2, -29.2, 'Games Workshop', 90),
  new Transaction(116, TransactionType.Sell, '2019-02-05T10:01:09.835Z', 29.65, 29.65, 'Games Workshop', -60),
  new Transaction(120, TransactionType.Buy, '2019-02-05T11:23:11.235Z', 29.55, -29.55, 'Games Workshop', 75),
  new Transaction(245, TransactionType.Sell, '2019-05-04T12:18:55.813Z', 2.06, 2.06, 'Bt', -15),
  new Transaction(596, TransactionType.Withdrawal, '2019-11-13T12:03:17.584Z', 10, -10),
  new Transaction(601, TransactionType.Sell, '2019-11-27T15:59:07.054Z', 1.93, 1.93, 'Bt', -4),
  new Transaction(665, TransactionType.Sell, '2019-12-12T14:08:19.954Z', 1.58, 1.58, 'Carr\'s', -31),
  new Transaction(798, TransactionType.Sell, '2020-01-29T09:49:37.185Z', 2.28, 2.28, 'Pets At Home', -128),
  new Transaction(799, TransactionType.Withdrawal, '2020-01-29T09:50:28.009Z', 5.50, -5.50)
];

export const dates: any[] = [
  { value: '2019-01-01T09:45:00.000Z', expected: '01/01/2019' },
  { value: '2019-01-02T09:34:02.000Z', expected: '02/01/2019' },
  { value: '2019-01-02T10:05:16.345Z', expected: '02/01/2019' },
  { value: '2019-01-02T11:15:55.038Z', expected: '02/01/2019' },
  { value: '2019-01-02T12:00:45.358Z', expected: '02/01/2019' },
  { value: '2019-01-02T14:30:00.155Z', expected: '02/01/2019' },
  { value: '2019-01-02T15:59:40.111Z', expected: '02/01/2019' },
  { value: '2019-02-04T10:30:55.999Z', expected: '04/02/2019' },
  { value: '2019-02-05T10:00:00.000Z', expected: '05/02/2019' },
  { value: '2019-02-05T10:01:09.835Z', expected: '05/02/2019' },
  { value: '2019-02-05T11:23:11.235Z', expected: '05/02/2019' },
  { value: '2019-05-04T12:18:55.813Z', expected: '04/05/2019' },
  { value: '2019-11-13T12:03:17.584Z', expected: '13/11/2019' },
  { value: '2019-11-27T15:59:07.054Z', expected: '27/11/2019' },
  { value: '2019-12-12T14:08:19.954Z', expected: '12/12/2019' },
  { value: '2020-01-29T09:49:37.185Z', expected: '29/01/2020' },
  { value: '2020-01-29T09:50:28.009Z', expected: '29/01/2020' }
];

export const values: any[] = [
  { value: 320, expected: '£320.00' },
  { value: 50.05, expected: '£50.05' },
  { value: 8.08, expected: '£8.08' },
  { value: 2.61, expected: '£2.61' },
  { value: 2.09, expected: '£2.09' },
  { value: 1.16, expected: '£1.16' },
  { value: 2.4, expected: '£2.40' },
  { value: 2.27, expected: '£2.27' },
  { value: 29.2, expected: '£29.20' },
  { value: 29.65, expected: '£29.65' },
  { value: 29.55, expected: '£29.55' },
  { value: 2.06, expected: '£2.06' },
  { value: 10, expected: '£10.00' },
  { value: 1.93, expected: '£1.93' },
  { value: 1.58, expected: '£1.58' },
  { value: 2.28, expected: '£2.28' },
  { value: 5.5, expected: '£5.50' }
];

export const cashflows: any[] = [
  { value: 320, expected: '+£320.00' },
  { value: -50.05, expected: '-£50.05' },
  { value: -8.08, expected: '-£8.08' },
  { value: -2.61, expected: '-£2.61' },
  { value: -2.09, expected: '-£2.09' },
  { value: -1.16, expected: '-£1.16' },
  { value: -2.4, expected: '-£2.40' },
  { value: 2.27, expected: '+£2.27' },
  { value: -29.2, expected: '-£29.20' },
  { value: 29.65, expected: '+£29.65' },
  { value: -29.55, expected: '-£29.55' },
  { value: 2.06, expected: '+£2.06' },
  { value: -10, expected: '-£10.00' },
  { value: 1.93, expected: '+£1.93' },
  { value: 1.58, expected: '+£1.58' },
  { value: 2.28, expected: '+£2.28' },
  { value: -5.5, expected: '-£5.50' }
];
