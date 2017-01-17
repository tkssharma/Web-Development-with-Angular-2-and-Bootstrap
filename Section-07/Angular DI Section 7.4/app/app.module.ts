import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule} from '@angular/forms';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import ApplicationComponent from './components/application/application';
import CarouselComponent from "./components/carousel/carousel";
import FooterComponent from "./components/footer/footer";
import NavbarComponent from "./components/navbar/navbar";
import HostItemComponent from "./components/host-item/host-item";
import StarsComponent from "./components/stars/stars";
import {HostService} from "./services/host-service";
import HomeComponent from "./components/home/home";

@NgModule({
    imports:      [ BrowserModule, ReactiveFormsModule],
    declarations: [ ApplicationComponent,
                    CarouselComponent,
                    FooterComponent,
                    NavbarComponent,
                    HomeComponent,
                    HostItemComponent,
                    
                    StarsComponent],
    providers:    [HostService],
    bootstrap:    [ ApplicationComponent ]
})
export class AppModule { }