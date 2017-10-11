import {HttpClient} from './../http.service';

import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
const url = 'http://localhost:3000/api'
@Injectable()
export  class cartService {
 constructor(private httpclient : HttpClient) {}

 getAllProducts() : Observable < any > {
  return this
   .httpclient
   .get(url)
   .map((res : Response) => res.json())
   .catch((error : any) => Observable.throw('Server error'));
 }

}