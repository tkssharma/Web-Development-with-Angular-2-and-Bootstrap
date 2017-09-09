import {Component,OnInit} from '@angular/core';
import {ProductService, Product} from "../services/product-service";

@Component({
  selector: 'di-product-page',
  template: `<div>
  <h1>Product Details</h1>
  <h2>Title: {{product.title}}</h2>
  <h2>Description: {{product.description}}</h2>
  <h2>Price: \${{product.price}}</h2>

  <div class="list">
  <div *ngFor="let data of productList">
       <h6>Product Details</h6>
        <h6>Title: {{data.title}}</h6>
        <h6>Description: {{data.description}}</h6>
        <h6>Price: \${{data.price}}</h6>
  </div>

  </div>
</div>`,
  providers:[ProductService]
})

export default class ProductComponent implements OnInit {
  product: Product;
  productList : Product[]

  constructor(private productService: ProductService) {
    // never put API CALL HERE
  }
  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getListOfProducts();
    this.getProducts();
  }
  getProducts(){
    this.product = this.productService.getProduct();
  }
  getListOfProducts(){
    this.productList = this.productService.getListProduct();
  }
}
