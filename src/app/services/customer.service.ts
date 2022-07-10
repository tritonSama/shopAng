import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { Customer } from '../models/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private url = "Customer"

  constructor(private http: HttpClient) { }

  public getAllCustomer() : Observable<Customer[]> {
  
    return this.http.get<Customer[]>('${environment.apiUrl}/${this.url}');

  }
}
