import { FormsModule } from '@angular/forms';
import  LoaderComponent  from './loader/loader-component';
import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent } from './app.component';
import HeaderComponent from './header/app-header';
import FooterComponent from './footer/app-footer';
import YouTube from './main/youtube';
import {LoaderService} from './loader/loader-service';
import {HttpClient} from './http.service';
import SearchBar from './main/search-bar';
import videoList from './main/video-list/video-list';
import videolistItem from './main/video-list/video-list-item';
import videodetails from './main/video-detail/video-detail';
//import {LocalStorageService} from './local.storage.service';
import {HttpModule} from '@angular/http';
import  {SafePipe} from './Pipe';

@NgModule({
    imports: [
        BrowserModule,FormsModule,HttpModule,FormsModule
    ],
    declarations: [
        AppComponent,HeaderComponent,videoList,FooterComponent,SafePipe,
        YouTube,LoaderComponent,SearchBar,videolistItem,videodetails
    ],
    providers : [LoaderService,HttpClient],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
