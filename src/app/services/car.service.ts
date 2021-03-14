import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarDtoResponseModel } from '../models/carDtoResponseModel';
import { CarResponseModel } from '../models/carResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl = "https://localhost:44321/api/cars/getall";

  apiUrl2 ="https://localhost:44321/api/cars/getcardetails";

  constructor(private httpClient:HttpClient) { }

  getCars():Observable<CarResponseModel>{
    return this.httpClient
    .get<CarResponseModel>(this.apiUrl);
  }

  getCarDtos():Observable<CarDtoResponseModel>{
    return this.httpClient
    .get<CarDtoResponseModel>(this.apiUrl2);
  }
}
