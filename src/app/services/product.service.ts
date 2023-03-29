import { Injectable } from '@angular/core';
import {services} from "../mocks/services.mocks"
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getAllServices = ()=>{
    return services;
  }
}
