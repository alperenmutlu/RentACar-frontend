import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car';
import { CarDto } from 'src/app/models/carDto';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  cars:Car[] = [];
  carDtos:CarDto[] = [];
  dataLoaded = false;

  constructor(private carService:CarService) { }

  ngOnInit(): void {
    this.getCarDtos()
  }

  getCars(){
    this.carService.getCars().subscribe(response =>{
      this.cars = response.data
      this.dataLoaded = true
    })
  }

  getCarDtos(){
    this.carService.getCarDtos().subscribe(response=>{
      this.carDtos = response.data
    })
  }

}
