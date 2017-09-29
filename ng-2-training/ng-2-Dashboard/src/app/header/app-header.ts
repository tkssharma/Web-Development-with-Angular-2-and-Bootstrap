import { Component } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './app.component.html'
})

export default class HeaderComponent {
    filter: Object;
    constructor(){
        this.filter ={};
    }
    handleChange(){
     console.log(this.filter);
    }
}
