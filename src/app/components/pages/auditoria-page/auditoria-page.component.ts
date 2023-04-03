import { Component, OnInit } from '@angular/core';
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
    this.productAuditoria = this.productService.getAllProductAuditoria();
  }
}
