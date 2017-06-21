import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './components/app.component';
import {HomeComponent} from "./components/home";
import {ProductDetailComponent} from "./components/product";
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import routing from './components/app.routing';
import {_404Component} from "./components/404";

@NgModule({
    imports:      [ BrowserModule, RouterModule.forRoot(routing) ],
    declarations: [ AppComponent, HomeComponent, ProductDetailComponent,_404Component],
    providers:[],
    //providers:[{provide: APP_BASE_HREF, useValue: '/'}],
    bootstrap:    [ AppComponent ]
})
class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
