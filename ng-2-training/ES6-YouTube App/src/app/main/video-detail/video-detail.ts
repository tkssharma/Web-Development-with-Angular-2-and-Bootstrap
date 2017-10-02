import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'video-detail',
    templateUrl: './video-detail.html'
})

export default class SearchBar implements OnInit {
    @Input() selectVideo: any;
    constructor(){
    }
    ngOnInit(){
        console.log(this.selectVideo);
    }
}
