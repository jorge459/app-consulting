import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { IProductService } from 'src/app/models/product.interface';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-outsourcing-page',
  templateUrl: './outsourcing-page.component.html',
  styleUrls: ['./outsourcing-page.component.scss']
})
export class OutsourcingPageComponent implements OnInit{
  constructor(private productService:ProductService){

  }
  productOutsourcing:IProductService[] =[];
  indice =0;
  ngOnInit(): void {
    axios.get("http://localhost:3000/products/outsourcing").then(({data})=>{this.productOutsourcing=data});
  }
}
