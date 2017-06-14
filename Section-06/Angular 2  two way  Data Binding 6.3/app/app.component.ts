import {Component} from '@angular/core';
import NavbarComponent from './navbar/navbar';
import FooterComponent from './footer/footer';
import { HostListComponent } from './hosts/host-list.component';

@Component({
    selector: 'my-app',
    template: `
    <auction-navbar></auction-navbar>
    <div class="container" style="margin-top:60px;">
    <div class="row">
    <div class="col-md-12">
    <p ngClass="centered-text underlined" class="orange">
    </p>
    <pm-hosts></pm-hosts>
    <p style="padding: 1rem"
    [ngStyle]="{
        color: 'red',
        'font-weight': 'bold',
        borderBottom: borderStyle
    }">
    </div>
    </div>
    </div>
    ` ,
    styles: [`
        .centered-text {
            text-align: center;
        }

        .underlined {
            border-bottom: 1px solid #ccc;
        }

        .orange {
            color: orange;
        }
        `]

    })
    export class AppComponent {
        pageTitle: string = 'Host Management';
        price: number = 100.123456;
    }
