import {Component} from '@angular/core';
import { NgModule }      from '@angular/core';

// Component
@Component({
  selector: 'hello-world2',
  template: '<h1>Hello {{ name }}!</h1>'
})
class HelloWorldComponent {
  name: string;

  constructor() {
    this.name = 'Angular';
  }
}
export default HelloWorldComponent;
