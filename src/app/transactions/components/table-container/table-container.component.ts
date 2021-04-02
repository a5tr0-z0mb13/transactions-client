import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';

import { Transaction } from '../../models';
import { TransactionsService } from '../../services';
import { FormContainerComponent } from '../form-container/form-container.component';

@Component({
  selector: 'transactions-table-container',
  templateUrl: './table-container.component.html',
  styleUrls: ['./table-container.component.scss']
})
export class TableContainerComponent implements OnInit {
  public dataSource: MatTableDataSource<Transaction> = new MatTableDataSource();

  public columns: string[] = [];

  constructor(
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
    private transactionsService: TransactionsService
  ) {}

  /**
   * Creates a uni-directional data flow.
   */
  public ngOnInit(): void {
    this.transactionsService.transactions.subscribe((transactions: Transaction[]) => {
      this.dataSource.data = transactions;

      this.columns = transactions[0] ? [...Object.keys(transactions[0]).map((key: string) => key.toLowerCase()), 'actions'] : [];
    });

    this.transactionsService.refreshTransactions();
  }

  /**
   * Opens a dialog containing a form. Allows the user to create a new Transaction.
   */
  public create(): void {
    const matDialogRef: MatDialogRef<FormContainerComponent> = this.dialog.open(FormContainerComponent);

    matDialogRef.afterClosed().subscribe((dialogResult: Transaction) => {
      this.transactionsService.create(dialogResult).subscribe(
        (transaction: Transaction) => this.handleSuccess('Transaction created successfully', transaction),
        (error: HttpErrorResponse) => this.handleError('Error creating transaction', error)
      )
    });
  }

  /**
   * Opens a dialog containing a form. Allows the user to update an existing Transaction.
   */
  public update(transaction: Transaction): void {
    const matDialogRef: MatDialogRef<FormContainerComponent> = this.dialog.open(FormContainerComponent, { data: { transaction } });

    matDialogRef.afterClosed().subscribe((dialogResult: any) => {
      this.transactionsService.update(transaction.id, dialogResult).subscribe(
        (transaction: Transaction) => this.handleSuccess('Transaction updated successfully', transaction),
        (error: HttpErrorResponse) => this.handleError('Error updating transaction', error)
      )
    })
  }

  /**
   * Deletes an existing Transaction.
   */
  public delete(transaction: Transaction): void {
    this.transactionsService.delete(transaction).subscribe(
      () => this.handleSuccess('Transaction deleted successfully'),
      (error: HttpErrorResponse) => this.handleError('Error deleting transaction', error)
    )
  }

  /**
   * Handles successful API calls.
   */
  public handleSuccess(message: string, transaction?: Transaction): void {
    this.snackBar.open(message, undefined, { duration: 1000 });

    // TODO: Implement logging
    // console.log(transaction);

    this.transactionsService.refreshTransactions();
  }

  /**
   * Handles unsuccessful API calls
   */
  public handleError(message: string, error?: HttpErrorResponse): void {
    this.snackBar.open(message, undefined, { duration: 2500 });

    // TODO: Implement logging
    // console.log(error);
  }
}
