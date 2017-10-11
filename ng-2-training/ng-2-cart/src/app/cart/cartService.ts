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

    CartState = this.cartSubject.asObservable();
    addProduct(_product:any) {
      this.cartSubject.next(<CartState>{loaded: true});
    }
    removeProduct(id:number) {
      this.cartSubject.next(<CartState>{loaded: false});
    }

  getAllProducts() : Observable <any> {
    return this
      .httpclient
      .get(url)
      .map((res : Response) => res.json())
      .catch((error : any) => Observable.throw('Server error'));
  }

}