import { product } from './../product';
import { CartState } from './CartState';
import {HttpClient} from './../http.service';

import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
const url = 'http://localhost:3000/api'
@Injectable()
export class cartService {
  constructor(private httpclient : HttpClient) {}
  private cartSubject = new Subject<CartState>();
    Products : product[]= [];
    CartState = this.cartSubject.asObservable();
    addProduct(_product:any) {
      console.log('in service');
      this.Products.push(_product)
      this.cartSubject.next(<CartState>{loaded: true, products:  this.Products});
    }
    removeProduct(id:number) {
      this.Products = this.Products.filter((_item) =>  _item.id !== id )
      this.cartSubject.next(<CartState>{loaded: false , products:  this.Products});
    }

  getAllProducts() : Observable <any> {
    return this
      .httpclient
      .get(url)
      .map((res : Response) => res.json())
      .catch((error : any) => Observable.throw('Server error'));
  }

}