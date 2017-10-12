import {cartService} from './cartService';
import {Component, Input} from '@angular/core';
import {product} from '../product';
@Component({selector: 'shopping-cart-item', templateUrl: './shopping-cart-item.html'})

export default class shoppingCartItem {
    @Input()product : product;
    constructor(private _cartService : cartService) {}
    AddProduct(_product : product) {
        _product.added = true;
        this
            ._cartService
            .addProduct(_product);
    }
    RemoveProduct(_product : product) {
        _product.added = false;
        this
            ._cartService
            .removeProduct(_product.id);
    }

}
