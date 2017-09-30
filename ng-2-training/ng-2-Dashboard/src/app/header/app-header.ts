import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './app.component.html'
})

export default class HeaderComponent {
    filter: Object;
    @Output() filterChange = new EventEmitter();

    constructor(){
        this.filter ={};
    }
    handleChange(){
     console.log(this.filter);
     this.filterChange.emit({
        value: this.filter
      })
    }

}
