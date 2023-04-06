import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { IProductService } from 'src/app/models/product.interface';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-inventario-page',
  templateUrl: './inventario-page.component.html',
  styleUrls: ['./inventario-page.component.scss']
})
export class InventarioPageComponent implements OnInit {
  constructor(private productService:ProductService){

  }
  productInventario:IProductService[] =[];
  indice =0;
  ngOnInit(): void {
    axios.get("http://localhost:3000/products/inventario").then(({data})=>{this.productInventario=data});
  }
}
