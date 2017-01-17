  import { Component, NgModule } from '@angular/core';
  import { BrowserModule } from '@angular/platform-browser';
  import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
  import { FormsModule } from '@angular/forms';

  @Component({
    selector: 'app',
    templateUrl: 'app/app.html'
  })
  class AppComponent {
    onSubmit(formData) {
      console.log(formData);
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
