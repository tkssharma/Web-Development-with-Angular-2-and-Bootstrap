import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'counter',
  template: `
    <div class="counter">
      <div class="counter__container">
        <button (click)="decrement();" class="counter__button">
          -
        </button>
        <input type="text" class="counter__input" [value]="counterValue">
        <button (click)="increment();" class="counter__button">
          +
        </button>
      </div>
    </div>
  `
})
 class CounterComponent {
  @Input() counterValue = 0;
  @Output() counterChange = new EventEmitter();
  increment() {
    this.counterValue++;
    this.counterChange.emit({
      value: this.counterValue
    })
  }
  decrement() {
    this.counterValue--;
    this.counterChange.emit({
      value: this.counterValue
    })
  }
}

export default CounterComponent;
