import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../../models/customer';
import { select, Store } from '@ngrx/store';
import { CustomerState } from '../store/reducer/customer.reducer';
import { selectCustomers } from '../store/selector/customer.selectors';

@Component({
  selector: 'app-customer-view',
  templateUrl: './customer-view.component.html',
  styleUrls: ['./customer-view.component.css']
})
export class CustomerViewComponent implements OnInit {

  customer$: Observable<Customer[]>;

  constructor(private store: Store<CustomerState>) {
    this.customer$ = this.store.pipe(select(selectCustomers));
  }

  ngOnInit(): void {
  }

}
