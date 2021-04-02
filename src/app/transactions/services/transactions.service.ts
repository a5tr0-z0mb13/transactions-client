import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { classToPlain, plainToClass } from 'class-transformer';

import { BehaviorSubject, Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { Transaction } from '../models';

// TODO: Split into read / write services?

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {
  private _transactions: BehaviorSubject<Transaction[]> = new BehaviorSubject<Transaction[]>([]);
  // An Observable Array of Transactions
  public transactions: Observable<Transaction[]> = this._transactions.asObservable();

  constructor(private httpClient: HttpClient) {}

  /**
   * Sends a GET Request to the API, refreshing the Array of Transactions.
   */
  public refreshTransactions(): void {
    this.httpClient.get<Transaction[]>(environment.endpoints.transactions).subscribe(
      (response: Transaction[]) => this._transactions.next(plainToClass(Transaction, response, { groups: ['penceToPounds']})),
      (error: HttpErrorResponse) => this._transactions.error(error)
    );
  }

  /**
   * Sends a POST Request to the API, creating a new Transaction.
   */
  public create(transaction: Transaction): Observable<Transaction> {
    return this.httpClient.post<any>(environment.endpoints.transactions, classToPlain(transaction));
  }

  /**
   * Sends a PUT Request to the API, updating an existing Transaction.
   */
  public update(id: number, transaction: Transaction): Observable<Transaction> {
    return this.httpClient.put<any>(`${ environment.endpoints.transactions }/${ id }`, classToPlain(transaction));
  }

  /**
   * Sends a DELETE Request to the API, deleting an existing Transaction.
   */
  public delete(transaction: Transaction): Observable<void> {
    return this.httpClient.delete<any>(`${ environment.endpoints.transactions }/${ transaction.id }`);
  }
}
