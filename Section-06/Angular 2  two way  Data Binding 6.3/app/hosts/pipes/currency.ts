
import {Pipe,Component}  from '@angular/core';


@Component({
  selector: 'my-app',
  template: '<p>My name is <strong>{{ price | currency }}</strong>.</p>',
export class AppComponent {
  price : number = 100.99
}


