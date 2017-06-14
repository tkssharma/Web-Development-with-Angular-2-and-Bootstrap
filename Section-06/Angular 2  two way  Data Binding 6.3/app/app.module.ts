import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AppComponent} from './app.component';
import { HostFilterPipe } from './hosts/host-filter.pipe';
import NavbarComponent from './navbar/navbar';
import FooterComponent from './footer/footer';
import { HostListComponent } from './hosts/host-list.component';
import { FormsModule }   from '@angular/forms';

@NgModule({
    imports:      [ BrowserModule,FormsModule],
    declarations: [AppComponent,NavbarComponent,HostListComponent,HostFilterPipe],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
