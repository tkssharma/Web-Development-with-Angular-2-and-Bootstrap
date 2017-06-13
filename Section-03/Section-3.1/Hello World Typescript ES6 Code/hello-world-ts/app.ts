
import { HelloWorldComponent } from './main';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// Module
@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ HelloWorldComponent],
  bootstrap:    [ HelloWorldComponent ]
})
export class AppModule { }

