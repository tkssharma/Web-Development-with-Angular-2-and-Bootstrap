import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app/appComponent';
import { AppBar } from './app/ui/app-bar/app-bar';
import { NoteContainer }  from './app/note-container';
import { NoteCard } from './app/ui/note-card/note-card';

import './global.css';
// note taking application

@NgModule({
  imports : [BrowserModule],
  declarations : [AppComponent,AppBar,NoteContainer,NoteCard],
  bootstrap : [AppComponent]
})
export class AppModule {

}

platformBrowserDynamic().bootstrapModule(AppModule);
