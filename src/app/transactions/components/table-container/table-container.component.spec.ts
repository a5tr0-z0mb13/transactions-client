import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';

import { of } from 'rxjs';

import { FormatDatePipe, FormatPoundsPipe, GetClassPipe, GetSumPipe } from '../../pipes';
import { TransactionsService } from '../../services';
import { transactions } from '../../spec-data';
import { TableContainerComponent } from './table-container.component';

describe('TableContainerComponent', () => {
  let component: TableContainerComponent;
  let fixture: ComponentFixture<TableContainerComponent>;

  let transactionsService: TransactionsService;
  let refreshTransactions: jasmine.Spy;
  let create: jasmine.Spy;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        FormatDatePipe,
        FormatPoundsPipe,
        GetClassPipe,
        GetSumPipe,
        TableContainerComponent
      ],
      imports: [
        HttpClientTestingModule,
        MatButtonModule,
        MatDialogModule,
        MatIconModule,
        MatMenuModule,
        MatSnackBarModule,
        MatTableModule
      ],
      providers: [TransactionsService]
    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(TableContainerComponent);
      component = fixture.componentInstance;

      transactionsService = TestBed.inject(TransactionsService);
      refreshTransactions = spyOn(transactionsService, 'refreshTransactions');
      create = spyOn(transactionsService, 'create');
    });
  });

  describe('compilation', () => {
    it('should create the Component', () => {
      fixture.detectChanges();

      expect(component).toBeTruthy();
    });
  });

  describe('ngOnInit', () => {
    it('should call the TransactionService\'s refreshTransactions Function', () => {
      fixture.detectChanges();

      expect(refreshTransactions).toHaveBeenCalled();
    });

    it('should set the value of the TableDataSource\'s data property', () => {
      transactionsService.transactions = of(transactions);

      fixture.detectChanges();

      expect(component.dataSource.data).toEqual(transactions);
    });

    it('should set the value of the Columns Array', () => {
      transactionsService.transactions = of(transactions);

      fixture.detectChanges();

      expect(component.columns).toEqual(['id', 'type', 'date', 'value', 'cashflow', 'security', 'shares', 'actions']);
    });
  });

  /**
   * Examples of deferring calls from a Component to an Injectable service
   */
  describe('create', () => {
    it('should call the TransactionService\'s create Function', () => {

    });
  });
});
