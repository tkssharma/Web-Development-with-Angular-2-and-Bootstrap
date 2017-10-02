import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';

@Component({selector: 'search-bar', template: '<input [(ng-model)]="searchText"  (change)="handleChange()" />'})

export default class SearchBar implements OnInit {
 @Output() searchTextChange = new EventEmitter();
 searchText:string;
 constructor(){}
 ngOnInit() {}
 handleChange(){
    console.log(this.searchText);
    this.searchTextChange.emit({
     value: this.searchText
   })
 }
}
