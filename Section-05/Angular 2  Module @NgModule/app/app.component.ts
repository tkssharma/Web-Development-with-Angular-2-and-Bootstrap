// app.component.ts
import {Component} from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <div class="app">
    {{myValue}}
    <h1>Hello World 2017</h1>
    </div>
  `,
})
 class AppComponent {
  public myValue:number = 2;
}

export default AppComponent;
