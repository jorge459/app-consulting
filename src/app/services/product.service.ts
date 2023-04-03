import { Injectable } from '@angular/core';
import {asesoriaService, auditoriaServices, inventarioService, outsourcingService, services} from "../mocks/services.mocks"
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getAllServices = ()=>{
    return services;
  }
  getAllProductAuditoria = ()=>{
    return auditoriaServices;
  }
  getAllProductAsesoria = ()=>{
    return asesoriaService;
  }
  getAllProductOutsourcing = ()=>{
    return outsourcingService;
  }
  getAllProductInvetario = ()=>{
    return inventarioService;
  }
}
