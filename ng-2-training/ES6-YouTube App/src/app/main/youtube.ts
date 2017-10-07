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
          client.search(params, (err:any, data:any) => {
            // your magic..
            console.dir(data);
            this.Videos = data.items;
            this.selectVideo = data.items[2]
            this.loaded = true;
          })
    }
    handleClickParentChange(e:any){
      console.log(e);
      this.selectVideo = e.value;
    }
    SearchValueChange(event:any){
      this.loaded = false;
      var params = {
          part: 'snippet',
          q: event.value,
          maxResults: 5
        }
        client.search(params, (err:any, data:any) => {
          // your magic..
          this.Videos = data.items;
          this.selectVideo = data.items[0]
          this.loaded = true;
      });
    }
}
