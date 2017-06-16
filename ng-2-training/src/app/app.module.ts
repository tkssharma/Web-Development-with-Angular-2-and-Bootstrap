import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AppComponent} from './appComponent';

@NgModule({
  imports : [BrowserModule],
  declarations : [AppComponent],
  bootstrap : [AppComponent]
})
export class AppModule {

}