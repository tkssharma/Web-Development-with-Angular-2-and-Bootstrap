import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'my-app',
  encapsulation: ViewEncapsulation.Native,
  styles: [`
    .test {
      padding: 10px;
    }
  `],
  template: `
    <div class="test">
      <div>
        Title: {{ title }}
      </div>
      <input type="text" >
    </div>
  `
})
export class AppComponent {
  public title = 'Hello!';
}