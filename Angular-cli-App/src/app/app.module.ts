import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppChildComponent } from './app-child/app-child.component';
import {AppServiceService} from './app-service.service';
import {AuthModuleModule}  from './auth-module/auth-module.module';
import { ColorRedDirective } from './color-red.directive';
import { BgDirectiveDirective } from './bg-directive.directive';

@NgModule({
  declarations: [
    AppComponent,
    AppChildComponent,
    ColorRedDirective,
    BgDirectiveDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AuthModuleModule
  ],
  providers: [AppServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
