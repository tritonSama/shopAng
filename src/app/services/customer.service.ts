import { Injectable } from '@angular/core';
import { Customer } from '../models/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor() { }

  public getAllCustomer() : Customer[] {
    let customer = new Customer();
    customer.id = 1;
    customer.firstName = "Triton";
    customer.lastName = "Sama";

    return[customer];

  }
}
