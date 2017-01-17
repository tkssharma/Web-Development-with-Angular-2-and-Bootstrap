import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule} from '@angular/forms';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import ApplicationComponent from './app.component';
import {HostFilterPipe} from './hosts/host-filter.pipe'
import NavbarComponent from './navbar/navbar';
import FooterComponent from './footer/footer';
import { HostListComponent } from './hosts/host-list.component';
import { FormsModule} from '@angular/forms';


@NgModule({
    imports:      [ BrowserModule, FormsModule],
    declarations: [ HostListComponent,NavbarComponent,FooterComponent,ApplicationComponent,HostFilterPipe],
    providers:    [
                   {provide: LocationStrategy, useClass: HashLocationStrategy}],
    bootstrap:    [ ApplicationComponent ]
})
export class AppModule { }