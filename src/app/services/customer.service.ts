import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomerDtoResponseModel } from '../models/customerDtoResponseModel';
import { CustomerResponseModel } from '../models/customerResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  apiUrl = "https://localhost:44321/api/customers/getall";
  apiUrl2 = "https://localhost:44321/api/customers/getcustomersdetails";

  constructor(private httpClient:HttpClient) { }

  getCustomers():Observable<CustomerResponseModel>{
    return this.httpClient
    .get<CustomerResponseModel>(this.apiUrl);
  }

  getCustomerDtos():Observable<CustomerDtoResponseModel>{
    return this.httpClient
    .get<CustomerDtoResponseModel>(this.apiUrl2)
  }

}
