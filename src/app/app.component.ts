import { Component } from '@angular/core';
import { Customer } from './models/customer';
import { CustomerService } from './services/customer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shopAng.UI';
  customers : Customer[] = [];
  customerToEdit?: Customer;

  constructor(private customerService: CustomerService) {}

  ngOnInit() : void {
    this.customerService
    .getAllCustomer()
    .subscribe((result: Customer[]) => (this.customers = result));
  }

  updateCustomerList(customers: Customer[]) {
    this.customers = customers;
  }

  initNewCustomer() {
    this.customerToEdit = new Customer();
  }

  editCustomer(customer: Customer) {
    this.customerToEdit = customer;
  }
}
