import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { IProductService } from 'src/app/models/product.interface';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-auditoria-page',
  templateUrl: './auditoria-page.component.html',
  styleUrls: ['./auditoria-page.component.scss']
})
export class AuditoriaPageComponent implements OnInit {
  constructor(private productService:ProductService){}
  productAuditoria:IProductService[] =[];
  indice =0;
  ngOnInit(): void {
    // this.productAuditoria = this.productService.getAllProductAuditoria();
    axios.get("http://localhost:3000/products/auditoria").then(({data})=>{this.productAuditoria=data});
  }
}
