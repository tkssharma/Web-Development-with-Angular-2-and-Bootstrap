import { Component, Input, OnInit } from '@angular/core';
import {user} from '../user';
@Component({
    selector: 'main-result',
    templateUrl: './main-result.html'
})

export default class MainComponent implements OnInit {
    @Input() Users: user[];
    constructor(){
      this.Users =[];
    }
    ngOnInit(){
        console.log(this.Users);
    }
}
