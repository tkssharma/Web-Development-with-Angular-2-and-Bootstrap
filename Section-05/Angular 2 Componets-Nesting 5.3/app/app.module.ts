import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule} from '@angular/forms';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import {AppComponent} from './components/application/application';
import { FriendService } from './components/friend//friend-list';
import {FriendComponent} from './components/friend/friend.component'

@NgModule({
    imports:      [ BrowserModule],
    declarations: [ FriendComponent,AppComponent],
    providers:    [FriendService],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }