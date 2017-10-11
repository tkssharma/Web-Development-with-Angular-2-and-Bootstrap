import { cartService } from './cartService';
import { Component, Input } from '@angular/core';
import {product} from '../product';
@Component({
    selector: 'shopping-cart-item',
    templateUrl: './shopping-cart-item.html'
})

export default class shoppingCartItem {
  @Input() product:product ;
  constructor(private _cartService : cartService){}
  AddProduct(){
     this._cartService.addProduct(this.product);
  }

}
