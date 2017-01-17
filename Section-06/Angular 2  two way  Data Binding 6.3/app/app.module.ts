import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule} from '@angular/forms';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import {AppComponent} from './app.component';
import {HostFilterPipe} from './hosts/host-filter.pipe';
import NavbarComponent from './navbar/navbar';
import FooterComponent from './footer/footer';
import { HostListComponent } from './hosts/host-list.component';

@NgModule({
    imports:      [ BrowserModule, FormsModule],
    declarations: [ HostListComponent,NavbarComponent,FooterComponent,AppComponent,HostFilterPipe],
    providers:    [
                   {provide: LocationStrategy, useClass: HashLocationStrategy}],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }