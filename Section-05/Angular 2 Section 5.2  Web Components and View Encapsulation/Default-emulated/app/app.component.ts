import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'my-app',
  encapsulation : ViewEncapsulation.Native,
  styles: [`
    .test {
      padding: 10px;
      color : green;
    }
  `],
  template: `
    <div class="test">
        Title: {{ title }}
    </div>
  `
})
export class AppComponent {
  public title = 'Hello!';
}