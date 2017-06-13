import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import AppComponent from './app.component';
import CounterComponent from './counter.component';

@NgModule({
    imports:      [ BrowserModule],
    declarations: [ AppComponent,CounterComponent],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
