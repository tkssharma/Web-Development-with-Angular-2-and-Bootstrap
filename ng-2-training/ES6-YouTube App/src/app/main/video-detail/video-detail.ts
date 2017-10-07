import {Component, Input, OnInit, SimpleChanges, SimpleChange,OnChanges} from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';

@Component({selector: 'video-detail', templateUrl: './video-detail.html'})

export default class VideoDetails implements OnChanges {
  videoId : any;
  id : string;
  url : SafeResourceUrl;
  //@Input() selectVideo : any;

  constructor(public sanitizer : DomSanitizer,private ngZone: NgZone) {}
  public _selectVideo : any;

  get selectVideo() : any {
    // transform value for display
    return this._selectVideo;
  }

  @Input()set selectVideo(value : any) {
    this._selectVideo = value;
    if (this._selectVideo && this._selectVideo.id) {
      console.log(this._selectVideo);
      this.url = `https://www.youtube.com/embed/${this._selectVideo.id.videoId}`;
    }
    // do something on 'aa' change
  }
  ngOnChanges(changes : any) {
    if(this.selectVideo){
      const selectVideo : SimpleChange = changes.selectVideo;
      console.log('prev value: ', selectVideo.previousValue);
      console.log('got name: ', selectVideo.currentValue);
      this._selectVideo = selectVideo.currentValue;

    }
  }
}
