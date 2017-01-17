import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule, Component }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
import { ProductComponent } from './components/product'
import {ProductService}  from './services/product-service'


// Root component hosts two different product components
@Component({
  selector: 'app',
  template: `
    <h2>A root component hosts two products<br> provided by different services</h2>
    <product></product>
  `
})
class AppComponent {}

@NgModule({
  imports:      [ BrowserModule],
  providers: [ProductService],
  declarations: [ AppComponent, ProductComponent],
  bootstrap:    [ AppComponent ]
})
class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);