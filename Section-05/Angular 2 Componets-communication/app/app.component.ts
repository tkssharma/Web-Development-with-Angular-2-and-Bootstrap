// app.component.ts
import {Component} from '@angular/core';
import CounterComponent from './counter.component';

@Component({
  selector: 'my-app',
  template: `
    <div class="app">
      <counter [counterValue]="myValue"></counter>
    </div>
  `,
  //inputs: ['counterValue'],
})
 class AppComponent {
  public myValue:number = 2;
}

export default AppComponent;


