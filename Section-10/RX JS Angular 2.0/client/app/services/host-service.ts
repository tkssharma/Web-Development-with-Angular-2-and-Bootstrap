import {EventEmitter, Injectable} from '@angular/core';
import {Http, URLSearchParams } from '@angular/http';
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';

export class Host {
  constructor(
    public id: number,
    public title: string,
    public price: number,
    public rating: number,
    public description: string,
    public categories: Array<string>) {
  }
}

export class Review {
  constructor(
    public id: number,
    public productId: number,
    public timestamp: Date,
    public user: string,
    public rating: number,
    public comment: string) {
  }
}

export interface HostSearchParams {
  title: string;
  minPrice: number;
  maxPrice: number;
}

@Injectable()
export class HostService {

  searchEvent: EventEmitter = new EventEmitter();

  constructor(private http: Http) {}

  getHosts(): Observable<Host[]> {
    return this.http.get('/hosts')
      .map(response => response.json());
  }

  search(params: HostSearchParams): Observable<Host[]> {
    return this.http
      .get('/hosts', {search: encodeParams(params)})
      .map(response => response.json());
  }

  getHostById(hostId: number): Observable<Host> {
    return this.http.get(`/hosts/${hostId}`)
      .map(response => response.json());
  }

  getReviewsForHost(hostId: number): Observable<Review[]> {
    return this.http
      .get(`/hosts/${hostId}/reviews`)
      .map(response => response.json())
      .map(reviews => reviews.map(
        (r: any) => new Review(r.id, r.productId, new Date(r.timestamp), r.user, r.rating, r.comment)));
  }

  getAllCategories(): string[] {
    return ['North Indian', 'Soth Indian', 'Punjabi'];
  }
}

/**
 * Encodes the object into a valid query string.
 */
function encodeParams(params: any): URLSearchParams {
  return Object.keys(params)
    .filter(key => params[key])
    .reduce((accum: URLSearchParams, key: string) => {
      accum.append(key, params[key]);
      return accum;
    }, new URLSearchParams());
}
