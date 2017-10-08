import {Component, OnInit} from '@angular/core';
import {HttpClient} from './http.service';
import {product} from './product';
import {Response, Request} from '@angular/http';

@Component({selector: 'my-app', templateUrl: './app.component.html'})
export class AppComponent implements OnInit {
    constructor(private Http : HttpClient) {
        this.URL ='http://localhost:3000/api';
    }
    cart : product[];
    URL : string;
    ngOnInit() {
        this.Http.get(this.URL)
            .map((response : Response) => response.json())
            .subscribe((result:any) => {
                this.cart = result;
            });
    }

}
