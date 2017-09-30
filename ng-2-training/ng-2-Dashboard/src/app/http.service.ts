import {Injectable} from '@angular/core';
import {Http, Headers, Response, Request, BaseRequestOptions, RequestMethod, ResponseContentType} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import { LocalStorageService } from './local.Storage.service';

@Injectable()
export class HttpClient {
  constructor(private http: Http,
  private localStorageService: LocalStorageService) {}

  post(url: string, body: any = {}) {
    return this.request(url, RequestMethod.Post, body);
  }

  put(url: string, body: any) {
    return this.request(url, RequestMethod.Put, body);
  }

  postAndGetBlob(url: string, body: any = {}) {
    return this.request(url, RequestMethod.Post, body, true);
  }

  private request(url: string, method: RequestMethod, body?: any, isBlob = false): Observable<Response> {
    const headers = new Headers();
    this.addAuthHeaders(headers);
    if (this.localStorageService.get('mail')) {
      if (!body.data) {
        body.data = {};
      }
      body.data['email'] = this.localStorageService.get('mail');
    }
    const options = new BaseRequestOptions();
    options.headers = headers;
    options.url = url;
    options.method = method;
    options.body = body;
    options.withCredentials = true;
    if(isBlob) {
      options.responseType = ResponseContentType.Blob;
    }
    const request = new Request(options);
    return this.http.request(request)
      .catch((error: any) => this.onErrorHandler(error));
  }

  private addAuthHeaders(headers: Headers) {
    headers.append('Content-Type', 'application/json');
    if (this.localStorageService.get('token')) {
      headers.append('X-CSRF-Token', this.localStorageService.get('token'));
    }
  }

  private onErrorHandler(error: any) {
    const errors = error.json();
    if(error.status == 406 && Array.isArray(errors) && errors.indexOf("User is not logged in.") !== -1) {
      this.localStorageService.clearAll();
    } else if (error.status == 401 && Array.isArray(errors) && errors.indexOf("CSRF validation failed") !== -1) {
      // TODO: should logout after getting token
    }
    return Observable.throw(errors);
  }
}