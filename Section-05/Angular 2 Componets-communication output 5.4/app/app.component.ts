import {Component} from '@angular/core';
import {CounterComponent} from './counter.component';

@Component({
  selector: 'my-app',
  template: `
    <div class="app">
      <counter [counterValue]="myValue" (counterChange)="myValueChange($event);"></counter>
    </div>
  `,
  directives: [CounterComponent] //,
  //outputs: ['counterChange:change']

})
export class AppComponent {
  public myValue:number = 2;
  myValueChange($event) {
    console.log($event);
  }
}