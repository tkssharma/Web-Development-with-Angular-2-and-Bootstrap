// app.module.ts
import {NgModule} from '@angular/core';
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  bootstrap: [AppComponent]
})
export class AppModule {
}

// ts + css + html ===> bundle into single
// what is webpack and how to use it
// bundle.js


// system js => load