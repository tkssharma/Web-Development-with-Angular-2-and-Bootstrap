import {Component, OnInit} from '@angular/core';
import {HttpClient} from './http.service';
import {user} from './user';
import {Response, Request} from '@angular/http';

@Component({selector: 'my-app', templateUrl: './app.component.html'})
export class AppComponent implements OnInit {
    constructor(private Http : HttpClient) {
        this.URL ='http://localhost:3000/api';
    }
    Users : user[];
    loaded : boolean;
    URL : string;
    ngOnInit() {
        this.Http.get(this.URL)
            .map((response : Response) => response.json())
            .subscribe((result) => {
                this.Users = result;
                this.loaded = true;
            });
    }
    filterValueChange($event:any) {
        this.loaded = false;
        this.URL = 'http://localhost:3000'+ this.constructUrl($event);
        this.Http.get(this.URL)
        .map((response : Response) => response.json())
        .subscribe((result) => {
            this.Users = result;
            this.loaded = true;

        });
    }
    constructUrl(_filters:any){
        var _filters = _filters.value;
        var query = {};
        if(Object.keys(_filters).length > 0){
            if(_filters.location && _filters.location.length > 0 ){
                query['location'] = `location=${_filters.location}`
            }
            if(_filters.name && _filters.name.length > 0 ){
                query['name'] = `name=${_filters.name}`
            }
            if(_filters.company && _filters.company.length > 0 ){
                query['company'] = `company=${_filters.company}`
            }
        }
        else {
            return '/api';
        }
        var _loc = query['location'] ? query['location'] : '';
        var _name = query['name'] ? query['name'] : '';
        var _company = query['company'] ? query['company'] : '';

        if(_loc && _name && _company) {
              return `/api?${_loc}&${_name}&${_company}`;
        }else if(_name && _company){
            return `/api?${_name}&${_company}`;
        } else if(_name && _loc){
            return `/api?${_name}&${_loc}`;
        } else if (_company && _loc){
            return `/api?${_company}&${_loc}`;
        } else if (_company){
            return `/api?${_company}`;
        }else if (_loc){
            return `/api?${_loc}`;
        }else if (_name){
            return `/api?${_name}`;
        }
    }
}
