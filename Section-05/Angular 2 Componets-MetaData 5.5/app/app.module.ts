import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule} from '@angular/forms';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import ApplicationComponent from './app.component';
import { FriendService } from './friend//friend-list';
import friendComponent from './friend/friend.component'

@NgModule({
    imports:      [ BrowserModule, ReactiveFormsModule],
    declarations: [ friendComponent],
    providers:    [FriendService,
                   {provide: LocationStrategy, useClass: HashLocationStrategy}],
    bootstrap:    [ friendComponent ]
})
export class AppModule { }