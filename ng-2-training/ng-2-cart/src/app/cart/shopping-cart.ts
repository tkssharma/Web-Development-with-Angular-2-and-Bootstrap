import { Component, OnInit } from '@angular/core';
import {cartService} from './cartService';
import {product} from '../product';
@Component({
    selector: 'shopping-cart',
    templateUrl: './shopping-cart.html'
})

export default class shoppingCart implements OnInit {
    constructor(private cart_Service :cartService){
    }
    Products : product[]
    ngOnInit(){
        this.cart_Service.getAllProducts().subscribe(
            data => this.Products = data, //Bind to view
             err => {
                 // Log errors if any
                 console.log(err);
             });

    }
}
