import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Customer } from 'src/app/models/customer';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-edit-hero',
  templateUrl: './edit-hero.component.html',
  styleUrls: ['./edit-hero.component.css']
})
export class EditHeroComponent implements OnInit {
  @Input() customer?: Customer;
  @Output() customersUpdated = new EventEmitter<Customer[]>();
  constructor(private customerService: CustomerService) {}

  ngOnInit(): void {
  }

  updateCustomer(customer:Customer){
    this.customerService
    .updateCustomer(customer)
    .subscribe((customers: Customer[]) => this.customersUpdated.emit(customers));
  }

  deleteCustomer(customer:Customer){
    this.customerService
    .deleteCustomer(customer)
    .subscribe((customers: Customer[]) => this.customersUpdated.emit(customers));
  }
  

  createCustomer(customer:Customer){
    this.customerService
    .createCustomer(customer)
    .subscribe((customers: Customer[]) => this.customersUpdated.emit(customers));
  }
  

}
