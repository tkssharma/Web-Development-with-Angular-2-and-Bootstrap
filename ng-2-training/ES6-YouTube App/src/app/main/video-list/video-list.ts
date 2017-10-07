import { Component, Input, OnInit,Output,EventEmitter } from '@angular/core';
import {video} from '../video';

@Component({
    selector: 'video-list',
    templateUrl: 'video-list.html'
})

 class VideoList implements OnInit {
   @Input() Videos:video[] ;
   @Output() clickParentChange = new EventEmitter();

   ngOnInit(){
     console.log(this.Videos);
   }
   handleClickChange(e:any){
    this.clickParentChange.emit({
      value: e
    });
    console.log(e);

   }
}

export default VideoList;
