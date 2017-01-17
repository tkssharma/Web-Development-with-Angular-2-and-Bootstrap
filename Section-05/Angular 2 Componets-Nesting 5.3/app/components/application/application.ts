import {Component} from '@angular/core';

/** Nested Component */ 
import { FriendComponent } from  '../friend/friend.component';
import { FriendService } from '../friend/friend-list';

@Component({
  selector: 'my-app',
  styles: [`
  h1 {
    color:#545454;
    background:#02A8F4;
    padding:15px;
    box-shadow:2px 2px 2px 0 rgba(0, 0, 0, 0.3);
  }
  `]
  template: `
  <div>
  <h1>Hello from the {{componentName}}.</h1>
  <my-friends></my-friends>
  </div>
  `
})
export class AppComponent {
}