import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: 'src/app/app.component.html'
})
export class AppComponent {
  constructor() {}
  
  name: string = 'Angular2';
}