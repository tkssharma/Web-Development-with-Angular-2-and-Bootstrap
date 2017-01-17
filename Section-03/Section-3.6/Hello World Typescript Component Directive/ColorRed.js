import {Directive, ElementRef} from 'angular2/core';

// Create our custom directive, using a attribute selector
@Directive({
  selector: '[colorred]' // using [ ] means selecting attributes
})
export class ColorRed {
  constructor(element: ElementRef) {
    // simple DOM manipulation to set color to red
    // `nativeElement` is the direct reference to the DOM element
    element.nativeElement.style.color = 'red';
  }
}