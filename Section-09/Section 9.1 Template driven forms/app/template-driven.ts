  import { Component, NgModule } from '@angular/core';
  import { BrowserModule } from '@angular/platform-browser';
  import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
  import { FormsModule } from '@angular/forms';
  @Component({
    selector: 'app',
    templateUrl: 'app/app.html'
  })
  class AppComponent {
   user:object;
    constructor(){
      this.user = {
       'name' : 'tarun',
       'password' : 'mypassword'
     }
     // correct !!
    }
    onSubmit(formData,status) {
      // es6 class method right ??
      console.log(formData,status);
    }
    onchange(){
      console.log(this.user)
    }
    save(formData,status) {
      // es6 class method right ??
      console.log(formData,status);
    }

  }
 // create root Module and import Form Module
  @NgModule({
    imports     : [ BrowserModule, FormsModule ],
    declarations: [ AppComponent ],
    bootstrap   : [ AppComponent ]
  })
  class AppModule {}
  // Bootstrap AppModule
  platformBrowserDynamic().bootstrapModule(AppModule);
