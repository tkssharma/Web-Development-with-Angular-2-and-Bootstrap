import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FriendService } from './components/friend/friend-list';
import {FriendComponent} from './components/friend/friend.component'

@NgModule({
    imports:      [ BrowserModule],
    declarations: [ FriendComponent],
    providers:    [FriendService],
    bootstrap:    [ FriendComponent ]
})
export class AppModule { }
export class AppModule { }
