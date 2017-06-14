import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';


import {AppComponent} from './app.component';
import { HostFilterPipe } from './hosts/host-filter.pipe';
import NavbarComponent from './navbar/navbar';
import FooterComponent from './footer/footer';
import { HostListComponent } from './hosts/host-list.component';
import {HighlightDirective} from './shared/directive/hostListDirective'
import {ConfirmDirective} from './shared/directive/eventDirective';

@NgModule({
    imports:      [ BrowserModule,FormsModule],
    declarations: [ HighlightDirective,ConfirmDirective,AppComponent,NavbarComponent,HostListComponent,HostFilterPipe],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
