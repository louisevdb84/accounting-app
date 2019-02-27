import { Injectable } from '@angular/core';
import { Transaction } from '../_models/transaction';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { TransactionService } from '../_services/transaction.service';
import { AlertifyService } from '../_services/alertify.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class TransactionListResolver implements Resolve<Transaction> {
    constructor(private transactionService: TransactionService, private router: Router, private alertify: AlertifyService) { }

    resolve(route: ActivatedRouteSnapshot): Observable<Transaction> {
        return this.transactionService.getTransactions().pipe(
            catchError(err => {
                this.alertify.error('Problem retrieving data');
                this.router.navigate(['/home']);
                return of(null);
            })
        );
    }
}