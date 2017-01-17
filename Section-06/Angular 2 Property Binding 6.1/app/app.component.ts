import {Component} from '@angular/core';


    @Component({
        selector: 'host-application',
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
    export default class AppComponent {
        pageTitle: string = 'Host Management';
    }