import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule} from '@angular/forms';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import ApplicationComponent from './app.component';
import CounterComponent from './counter.component';

@NgModule({
    imports:      [ BrowserModule, ReactiveFormsModule],
    declarations: [ ApplicationComponent,CounterComponent],
    providers:    [
                   {provide: LocationStrategy, useClass: HashLocationStrategy}],
    bootstrap:    [ ApplicationComponent ]
})
export class AppModule { }