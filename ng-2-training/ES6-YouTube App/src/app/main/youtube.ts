import {Component, Input, OnInit} from '@angular/core';
import {video} from './video';
import * as youtubeSearch from "youtube-search";

@Component({selector: 'youtube', template: './youtube.html'})

export default class Youtube implements OnInit {
    Videos : video[];
    loaded : boolean;
    API_KEY : string;
    selectVideo : video;
    opts : any;
    constructor() {
        this.opts = {
            maxResults: 10,
            key: "AIzaSyAuQCVeNfKhtRk9KlChQPT1nO27DPO_5Ss"
        };
    }
    ngOnInit() {
        this.loaded = false;
        youtubeSearch("angular2", this.opts, (err : any, results : any) => {
            if (err)
                return console.log(err);
            console.dir(results);
            this.Videos = results;
            this.loaded = true;
        });
    }
    SearchValueChange(event:any){
        youtubeSearch(event.value, this.opts, (err : any, results : any) => {
            if (err)
                return console.log(err);
            console.dir(results);
            this.Videos = results;
            this.loaded = true;
        });
    }
}
