import * as moment from 'moment';

import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { plainToClass } from 'class-transformer';
import { combineLatest } from 'rxjs';

import { Transaction, TransactionType } from '../../models';

@Component({
  templateUrl: './form-container.component.html',
  styles: ['.mat-form-field { width: 100%; }']
})
export class FormContainerComponent implements OnInit {
  public formGroup: FormGroup;

  public types: string[];

  private _transaction: Transaction;

  public get transaction(): Transaction {
    return this._transaction;
  }

  public set transaction(transaction: Transaction) {
    this._transaction = transaction;
  }

  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<FormContainerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  public ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      type: [undefined, Validators.required],
      date: [undefined, Validators.required],
      value: [undefined, Validators.required],
      cashflow: [undefined, Validators.required],
      security: [undefined],
      shares: [undefined]
    });

    /**
     * Automatically update the cashflow when the type and / or value is updated.
     */
    combineLatest([
      this.formGroup.get('type').valueChanges,
      this.formGroup.get('value').valueChanges
    ]).subscribe((values: any[]) => {
      if (values[0] === TransactionType.Buy || values[0] === TransactionType.Withdrawal) {
        this.formGroup.get('cashflow').setValue(values[1] * -1);
      } else {
        this.formGroup.get('cashflow').setValue(values[1]);
      }
    });

    // Use the TransactionType enum's values to populate the select's options
    this.types = Object.keys(TransactionType).map((key: string) => TransactionType[key]);

    // If the data passed to the dialog contains a Transaction, it means we are in 'Update' mode
    if (this.data && this.data.transaction) {
      this.transaction = this.data.transaction;

      this.formGroup.patchValue(this.transaction);
    }
  }

  /**
   * Closes the dialog.
   */
  public cancel(): void {
    this.dialogRef.close();
  }

  /**
   * Clears the form.
   *
   * If we were in 'update' mode, switches us over to 'create' mode.
   */
  public clear(): void {
    this.transaction = null;

    this.formGroup.reset();
  }

  /**
   * Pre-processes the form, creates a Transaction from the form values and passes it to the opener.
   */
  public ok(): void {
    const obj: any = Object.assign({}, this.formGroup.value);

    // Convert the datapicker moment Object to an ISO 8601 String
    obj['date'] = moment(obj['date']).toISOString();

    // Remove null or undefined values
    Object.keys(obj).forEach((key: string) => {
      if (obj[key] === null || obj[key] === undefined) {
        delete obj[key];
      }
    });

    this.dialogRef.close(plainToClass(Transaction, obj));
  }
}
