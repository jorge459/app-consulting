import { Component, Input } from '@angular/core';
import { IProduct } from 'src/app/models/product.interface';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {

  @Input() product:IProduct = {};
  @Input() indice:number =0;
  links =['/auditoria','/consultoria','/outsourcing','/inventariado'];
  images_dirs =[
    '../../../../assets/icons/Auditoria.svg',
    '../../../../assets/icons/Asesoria.svg',
    '../../../../assets/icons/Outsourcing.svg',
    '../../../../assets/icons/Inventario.svg'
  ]
}
