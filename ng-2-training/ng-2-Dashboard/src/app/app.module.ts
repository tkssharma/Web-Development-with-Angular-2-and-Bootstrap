import { FormsModule } from '@angular/forms';
import  LoaderComponent  from './loader/loader-component';
import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent } from './app.component';
import HeaderComponent from './header/app-header';
import FooterComponent from './footer/app-footer';
import MainComponent from './main/main-result';
import {LoaderService} from './loader/loader-service';
import {HttpClient} from './http.service';
//import {LocalStorageService} from './local.storage.service';
import {HttpModule} from '@angular/http';

@NgModule({
    imports: [
        BrowserModule,FormsModule,HttpModule
    ],
    declarations: [
        AppComponent,HeaderComponent,FooterComponent,MainComponent,LoaderComponent
    ],
    providers : [LoaderService,HttpClient],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
