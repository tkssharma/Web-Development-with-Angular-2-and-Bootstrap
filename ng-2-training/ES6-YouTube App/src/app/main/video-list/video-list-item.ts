import { Component, Input, OnInit } from '@angular/core';
import {video} from  '../video';
@Component({
    selector: 'video-list-item',
    templateUrl: './video-list-item.html'
})

class VideoListItem implements OnInit {
   @Input() videoList:any;
   url:any;
   title:any;
   ngOnInit(){
     if(this.videoList.snippet){
       this.url = this.videoList.snippet.thumbnails.default.url;
       this.title = this.videoList.snippet.title;
     }
   }
}
export default VideoListItem;
