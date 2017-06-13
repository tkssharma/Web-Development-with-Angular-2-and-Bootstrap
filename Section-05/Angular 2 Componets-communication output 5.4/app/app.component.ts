import {Component} from '@angular/core';
import {CounterComponent} from './counter.component';

@Component({
  selector: 'my-app',
  template: `
    <div class="app">
      <counter [counterValue]="myValue" (counterChange)="myValueChange($event);"></counter>
    </div>
  `
})
  class AppComponent {

  public myValue:number = 2;
  myValueChange($event) {
    console.log($event);
  }
  sayhello():void {
      console.log('hello world');
  }
  sayHi():string {
      return 'hello'
  }

}
//export const hello = 'hello';
// named export
// default export

export  default AppComponent;
