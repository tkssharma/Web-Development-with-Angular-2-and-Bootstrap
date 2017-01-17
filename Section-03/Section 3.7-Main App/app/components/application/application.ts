import {Component} from '@angular/core';
import { Routes,  ROUTER_DIRECTIVES} from '@angular/router';

import NavbarComponent from '../navbar/navbar';
import FooterComponent from '../footer/footer';
import CaurselComponent from '../carousel/carousel';
import HomeComponent from '../home/home';


@Component({
  selector: 'auction-application',
  templateUrl: 'app/components/application/application.html',
  directives: [
    ROUTER_DIRECTIVES,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    CaurselComponent

  ]
})

export default class ApplicationComponent {}