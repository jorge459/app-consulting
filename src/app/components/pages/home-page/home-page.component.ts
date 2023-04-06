import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { IProduct } from "../../../models/product.interface";
import axios from 'axios';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  products:IProduct[] =[]
  constructor(private productService:ProductService){}
  ngOnInit(): void {
   axios.get("http://localhost:3000/products").then(({data})=>{this.products=data});
  }
}
