import {Component} from '@angular/core';
// es code
// Component
// typescript
@Component({
  selector: 'hello-world2',
  template: '<h1 (click)="sayHi()">Hello {{count}}{{data.name}} {{ name }}!</h1>'
})
// es6
export class HelloWorldComponent {
  name: string ;
  data : object;
  count:number;

  constructor() {
    this.name = 'Angular';
    this.count = 70;
  }
  sayhello():void {
    console.log('hello');
  }
  sayHi():void {
    // event trigger to service to fetch something
    this.data = { name : 'tarun sharma'};
    this.count = 800;
  }

}
// exporting from here
