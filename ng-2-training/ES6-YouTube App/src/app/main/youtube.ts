import {Component, Input, OnInit} from '@angular/core';
import {video} from './video';
//import * as youtubeSearch from "youtube-search";
var youtube = require('youtube-finder')
var client = youtube.createClient({ key: 'AIzaSyAuQCVeNfKhtRk9KlChQPT1nO27DPO_5Ss'})

@Component({selector: 'youtube', templateUrl: './youtube.html'})

export default class Youtube implements OnInit {
    Videos : video[];
    loaded : boolean;
    API_KEY : string;
    selectVideo : video;
    opts : any;
    constructor() {

    }
    ngOnInit() {
        this.loaded = false;
        var params = {
            part: 'snippet',
            q: 'Still into You paramore',
            maxResults: 5
          }
          client.search(params, function (err:any, data:any) {
            // your magic..
            console.dir(data);
            this.Videos = data;
            this.loaded = true;
          })
    }
    SearchValueChange(event:any){
         /* youtubeSearch(event.value, this.opts, (err : any, results : any) => {
            if (err)
                return console.log(err);

        }); */
    }
}
