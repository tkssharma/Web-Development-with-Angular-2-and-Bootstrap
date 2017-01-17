  import { Component, NgModule } from '@angular/core';
  import { BrowserModule } from '@angular/platform-browser';
  import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
  import { FormsModule } from '@angular/forms';

  @Component({
    selector: 'app',
    template: `
    <div class="container jumbotron">
      <form #f="ngForm" (ngSubmit)="onSubmit(f.value)">
      <div class="form-group " >
        <div>Username:        <input  type="text"     name="username" ngModel></div>
        </div>
        <div class="form-group" >
        <div>SSN:             <input type="text"     name="ssn"      ngModel></div>
        </div>
        <div class="form-group" >
        <div>Password:        <input type="password" name="password" ngModel></div>
        </div>
        <div class="form-group" >
        <div>Confirm password: <input type="password" name="pconfirm"  ngModel></div>
        </div>
        <button type="submit">Submit</button>
      </form>
      <div>

    `
  })
  class AppComponent {
    onSubmit(formData) {
      console.log(formData);
    }
  }

  @NgModule({
    imports     : [ BrowserModule, FormsModule ],
    declarations: [ AppComponent ],
    bootstrap   : [ AppComponent ]
  })
  class AppModule {}

  platformBrowserDynamic().bootstrapModule(AppModule);
