import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule} from '@angular/forms';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import ApplicationComponent from './components/application/application';
import FooterComponent from "./components/footer/footer";
import NavbarComponent from "./components/navbar/navbar";
import HomeComponent from "./components/home/home";
import ProductItem from "./components/product-item/product-item";


@NgModule({
    imports:      [ BrowserModule, ReactiveFormsModule],
    declarations: [ ApplicationComponent,
                    FooterComponent,
                    NavbarComponent,
                    ProductItem,
                    HomeComponent],
    providers:    [],
    bootstrap:    [ ApplicationComponent ]
})
export class AppModule { }