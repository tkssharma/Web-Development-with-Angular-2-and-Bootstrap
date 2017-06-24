import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app',
  template: `
  <div class="container jumbotron">
    <form [formGroup]="formModel" (ngSubmit)="onSubmit()">
      <div>Username: <input type="text" formControlName="username"></div>
      <div>Password:      <input type="text" formControlName="password"></div>

      <div formGroupName="AdditionalGroup">
        <div>Email:        <input type="text" formControlName="email"></div>
        <div>Address: <input type="text" formControlName="address"></div>
      </div>
      <button type="submit">Submit</button>
    </form>
    </div>
  `
})
class AppComponent {
  formModel: FormGroup;

  constructor() {
    this.formModel = new FormGroup({

      'username': new FormControl(),
      'password': new FormControl(),

      'AdditionalGroup': new FormGroup({
        'email': new FormControl(),
        'address': new FormControl()
      }),
      'AdditionalGroup': new FormGroup({
        'email': new FormControl(),
        'address': new FormControl()
      })
    });
  }

  onSubmit() {
    console.log(this.formModel.value);
  }
}

@NgModule({
  imports     : [ BrowserModule, ReactiveFormsModule ],
  declarations: [ AppComponent ],
  bootstrap   : [ AppComponent ]
})
class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
