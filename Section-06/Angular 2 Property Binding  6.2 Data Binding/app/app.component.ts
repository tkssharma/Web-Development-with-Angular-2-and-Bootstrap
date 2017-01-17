import {Component} from '@angular/core';
import NavbarComponent from './navbar/navbar';
import FooterComponent from './footer/footer';
import { HostListComponent } from './hosts/host-list.component';

    @Component({
        selector: 'pm-app',
        template: `
        <auction-navbar></auction-navbar>
           <div class="container" style="margin-top:60px;">
           <div class="row">
           <div class="col-md-12">
           <pm-hosts></pm-hosts>
           </div>
           </div>
        </div>
        ` 


    })
    export class AppComponent {
        pageTitle: string = 'Host Management';
    }