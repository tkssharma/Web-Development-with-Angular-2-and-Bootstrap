import { Component } from '@angular/core';
import {AppServiceService} from './app-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  message:string;
  constructor(private service:AppServiceService){
      // here invoke service mthods
      this.message = service.sayhello();
  }
  title = 'app works!';
}
