import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';

@Component({selector: 'search-bar', template: '<div class="search-bar" ><input [(ngModel)]="searchText" (change)="handleChange()" /></div>'})

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
