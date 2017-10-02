import { Component, Input, OnInit } from '@angular/core';
import {video} from '../video';

@Component({
    selector: 'video-list',
    templateUrl: 'video-list.html'
})

 class VideoList implements OnInit {
   @Input() Videos:video[] =[];
   ngOnInit(){}
}

export default VideoList;
