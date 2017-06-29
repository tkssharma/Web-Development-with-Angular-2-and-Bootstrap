import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'counter',
  template: `
    <div class="counter">
      <div class="counter__container">
        <button  (click)="decrement();" class="counter__button btn btn-primary">
          -
        </button>
        {{counterValue}}
        <input  type="text" class="counter__input" [value]="counterValue">
        <button  (click)="increment();" class="counter__button btn btn-primary">
          +
        </button>
      </div>
    </div>
  `
})

 class CounterComponent {
  @Input() counterValue = 0;
}

export default CounterComponent;