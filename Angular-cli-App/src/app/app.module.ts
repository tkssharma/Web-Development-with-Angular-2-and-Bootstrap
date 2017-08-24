import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FileSelectDirective, FileDropDirective } from 'ng2-file-upload';

import { AppComponent } from './app.component';
import { AppChildComponent } from './app-child/app-child.component';
import {AppServiceService} from './app-service.service';
import {AuthModuleModule}  from './auth-module/auth-module.module';
import { ColorRedDirective } from './color-red.directive';
import { BgDirectiveDirective } from './bg-directive.directive';
import { userPipe } from './user.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AppChildComponent,
    ColorRedDirective,
    BgDirectiveDirective,
    userPipe,
    FileSelectDirective,
    FileDropDirective 
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
