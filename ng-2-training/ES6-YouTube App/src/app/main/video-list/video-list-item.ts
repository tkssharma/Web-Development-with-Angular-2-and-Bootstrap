import { Component, Input, OnInit } from '@angular/core';
import {video} '../video';
@Component({
    selector: 'video-list-item',
    templateUrl: './video-list-item.html'
})

class VideoListItem implements OnInit {
   @Input() video:video ={}
    ngOnInit(){
    }
}
export default VideoListItem;
