import {Component} from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import ApplicationComponent from './components/application/application';
import CarouselComponent from "./components/carousel/carousel";
import FooterComponent from "./components/footer/footer";
import NavbarComponent from "./components/navbar/navbar";
import HostItemComponent from "./components/host-item/host-item";
import { HostService , Host} from "./services/host-service";
import HomeComponent from "./components/home/home";
import LoginComponent from "./components/login/login";
import ProfileComponent from "./components/profile/profile";
import HostDetailComponent from "./components/host-item/host-detail";
import SearchComponent from './components/search/search';



const routes: Routes = [
    {path: '',    component: HomeComponent},
    {path: 'login', component: LoginComponent},
    {path: 'profile', component: ProfileComponent},
    {path: 'host/:id', component : HostDetailComponent}
];

@NgModule({
    imports:      [ BrowserModule, RouterModule.forRoot(routes) ,ReactiveFormsModule,FormsModule],
    declarations: [ ApplicationComponent,CarouselComponent,FooterComponent,
                    NavbarComponent,HomeComponent,HostItemComponent,
                    LoginComponent,ProfileComponent,HostDetailComponent,SearchComponent],
    providers:    [ HostService ,{provide: LocationStrategy, useClass: HashLocationStrategy}],
    bootstrap:    [ ApplicationComponent ]
})
export class AppModule { }