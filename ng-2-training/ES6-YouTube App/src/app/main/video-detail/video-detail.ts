import { Component, Input, OnInit } from '@angular/core';
import {DomSanitizer,SafeResourceUrl,} from '@angular/platform-browser';


@Component({
  selector: 'video-detail',
  templateUrl: './video-detail.html'
})

export default class SearchBar implements OnInit {
  @Input() selectVideo: any;
  videoId: any;
  id: string;
  url: SafeResourceUrl;


  constructor(public sanitizer:DomSanitizer) {
  }
  ngOnInit() {
    if(this.selectVideo){
       this.videoId = this.selectVideo.id.videoId;
       this.id = `https://www.youtube.com/embed/${this.videoId}`;
       this.url = this.sanitizer.bypassSecurityTrustResourceUrl(this.id);
       console.log(this.url);
    }
  }
}
