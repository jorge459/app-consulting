import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { IProduct } from "../../../models/product.interface";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  products:IProduct[] =[]
  constructor(private productService:ProductService){}
  ngOnInit(): void {
   this.products= this.productService.getAllServices();
  }
}
