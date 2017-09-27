import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent } from './app.component';
import HeaderComponent from './header/app-header';
import FooterComponent from './footer/app-footer';
@NgModule({
    imports: [
        BrowserModule
    ],
    declarations: [
        AppComponent,HeaderComponent,FooterComponent
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
