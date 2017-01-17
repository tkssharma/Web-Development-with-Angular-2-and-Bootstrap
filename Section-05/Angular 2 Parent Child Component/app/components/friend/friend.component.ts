import {Component} from '@angular/core';
import { Routes,  ROUTER_DIRECTIVES} from '@angular/router';


@Component({
  selector: 'my-friends',
  styles: [`
  div { 
     background-color:#EFEFEF;
     margin-bottom:15px;
     padding:15px;
     border:1px solid #DDD;
     box-shadow:2px 2px 2px 0 rgba(0, 0, 0, 0.3);
    border-radius:3px;
  }
  h2 { 
    text-align: center;
  }
  `]
  template: `
  <h2>Hello from the {{componentName}}!</h2>
  <div *ngFor="#f of friends">
   <h4> Name : {{f.name}} </h4> <h4>Age: {{f.age}}</h4> 
  </div>
  `
})
export class FriendComponent {
  componentName: 'FriendComponent';
  //Assign 
    constructor(_productService: FriendService) {
    this.friend = _productService.getFriends();
  }
}

