import { Component } from '@angular/core';


@Component({
    selector: 'counter',
    outputs: ['counterChange']
})
export class CounterComponent {
    @Input() counterValue = 0;
    public counterChange = new EventEmitter();
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