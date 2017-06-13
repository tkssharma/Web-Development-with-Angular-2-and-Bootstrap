import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import AppComponent from './app.component';

@NgModule({
    declarations: [ // put all your components / directives / pipes here
		AppComponent
    ],
    imports: [ // put all your modules here
        BrowserModule // Angular 2 out of the box modules
    ],
    bootstrap: [ // The main components to be bootstrapped in main.ts file, normally one only
        AppComponent
    ]
})
export class AppModule { }
