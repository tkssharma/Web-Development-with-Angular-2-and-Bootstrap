// Modules
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AppRoutingModule} from './app-routing.module';

// Components
import {AppComponent} from './app.component';
import {UsersComponent}      from './users.component/users.component';
import {UserDetailComponent}  from './user-detail.component/user-detail.component';
import {UserAddComponent} from './user-add.component/user-add.component';
import {UserUpdateComponent} from './user-update.component/user-update.component';


@NgModule({
  declarations: [
    AppComponent,
    UserDetailComponent,
    UsersComponent,
    UserAddComponent,
    UserUpdateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
}
