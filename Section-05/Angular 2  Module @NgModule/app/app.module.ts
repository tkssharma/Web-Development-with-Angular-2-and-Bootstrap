import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule} from '@angular/forms';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import ApplicationComponent from './app.component';
import CounterComponent from './counter.component';

@NgModule({
    declarations: [ // put all your components / directives / pipes here
        AppComponent, // the root component
        No1Component, No2Component, ... // e.g. put all 10 components here
        AComponent, BComponent, // e.g. put component A and B here
        NiceDirective, 
        AwesomePipe,
    ],
    imports: [ // put all your modules here
        BrowserModule, // Angular 2 out of the box modules
        RouterModule, // some third party modules / libraries
    ],
    providers: [ // put all your services here
        AwesomeService,
    ],
    bootstrap: [ // The main components to be bootstrapped in main.ts file, normally one only
        AppComponent
    ]
})
export class AppModule { }

