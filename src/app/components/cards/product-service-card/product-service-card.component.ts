import { Component, Input } from '@angular/core';
import { IProductService } from 'src/app/models/product.interface';

@Component({
  selector: 'app-product-service-card',
  templateUrl: './product-service-card.component.html',
  styleUrls: ['./product-service-card.component.scss']
})
export class ProductServiceCardComponent {

  @Input() product:IProductService ={} ;
  @Input() indice=0;
}
