import { Component, OnInit } from '@angular/core';
import { IProductService } from '../../../models/product.interface';
import { ProductService } from 'src/app/services/product.service';

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
    this.productConsultoria = this.productService.getAllProductAsesoria();
  }
}
