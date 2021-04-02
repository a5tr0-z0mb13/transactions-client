import * as moment from 'moment';

import { Transform } from 'class-transformer';

import { TransactionType } from './transaction-type.enum';

export class Transaction {
  public id: number;

  public type: TransactionType;

  public date: string;

  @Transform(({ value }) => value / 100, { toClassOnly: true, groups: ['penceToPounds'] })
  @Transform(({ value }) => value * 100, { toPlainOnly: true })
  public value: number;

  @Transform(({ value }) => value / 100, { toClassOnly: true, groups: ['penceToPounds'] })
  @Transform(({ value }) => value * 100, { toPlainOnly: true })
  public cashflow: number;

  public security?: string;

  public shares?: number;

  constructor(
    id: number,
    type: TransactionType,
    date: string,
    value: number,
    cashflow: number,
    security?: string,
    shares?: number
  ) {
    this.id = id;
    this.type = type;
    this.date = date,
    this.value = value;
    this.cashflow = cashflow;
    this.security = security;
    this.shares = shares;
  }
}
