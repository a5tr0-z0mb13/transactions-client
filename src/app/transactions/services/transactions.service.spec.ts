import { HttpErrorResponse } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController, TestRequest } from '@angular/common/http/testing';
import { fakeAsync, tick, TestBed } from '@angular/core/testing';

import { environment } from '../../../environments/environment';
import { Transaction } from '../models';
import { response, transactions as expected } from '../spec-data';
import { TransactionsService } from './transactions.service';

describe('TransactionsService', () => {
  const url: string = environment.endpoints.transactions;

  let transactionsService: TransactionsService;

  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });

    transactionsService = TestBed.inject(TransactionsService);

    httpTestingController = TestBed.inject(HttpTestingController);
  });

  describe('injector', () => {
    it('should provide an instance of the service', () => {
      expect(transactionsService).toBeTruthy();
    });
  });

  /**
   * Examples testing successful / errored Http Requests...
   */
  describe('refreshTransactions', () => {
    afterEach(() => httpTestingController.verify());

    it('should handle HttpResponses', fakeAsync(() => {
      let actual: Transaction[];

      transactionsService.transactions.subscribe({
        next: (transactions: Transaction[]) => actual = transactions
      });

      transactionsService.refreshTransactions();

      const testRequest: TestRequest = httpTestingController.expectOne(url);
      expect(testRequest.request.method).toEqual('GET');
      testRequest.flush({ transactions: response.transactions });

      tick();

      expect(actual).toEqual(expected);
    }));

    it('should handle HttpErrorResponses', fakeAsync(() => {
      let actual: HttpErrorResponse;

      transactionsService.transactions.subscribe({
        error: (error: HttpErrorResponse) => actual = error
      });

      transactionsService.refreshTransactions();

      const testRequest: TestRequest = httpTestingController.expectOne(url);
      expect(testRequest.request.method).toEqual('GET');
      testRequest.error(null, { status: 500, statusText: 'Internal Server Error'});

      tick();

      expect(actual.status).toEqual(500);
      expect(actual.statusText).toEqual('Internal Server Error');
    }));
  });
});
