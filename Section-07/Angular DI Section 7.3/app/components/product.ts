import {Component} from '@angular/core';
import {ProductService, Product} from "../services/product-service";

// The first component gets a common ProductService injected
@Component({
  selector: 'product',
  template: '{{product.title}}'})
export class ProductComponent {
  product: Product;

  constructor(private productService: ProductService) {
    this.product = productService.getProduct();
  }
}
