import { Component, OnInit } from '@angular/core';
import { IProductService } from '../../../models/product.interface';
import { ProductService } from 'src/app/services/product.service';
import axios from 'axios';

@Component({
  selector: 'app-consultoria-page',
  templateUrl: './consultoria-page.component.html',
  styleUrls: ['./consultoria-page.component.scss']
})
export class ConsultoriaPageComponent implements OnInit{
  constructor(private productService:ProductService){

  }
  productConsultoria:IProductService[] =[];
  indice =0;
  ngOnInit(): void {
    axios.get("http://localhost:3000/products/consultoria").then(({data})=>{this.productConsultoria=data});
  }
}
