import {Component} from '@angular/core';
//import {ActivatedRoute} from '@angular/router';
import {Host, HostService} from '../../services/host-service';


        @Component({
        selector: 'host-detail',
        template: `<h1></h1>`,
        })

        export default class HostDetailComponent  {

            hostID: number;
            hosts: Host[] = [];

        constructor(private hostService) {

              //  this.hostID = route.snapshot.params['id'];
              //  console.log(this.hostID);
              //  this.hosts = this.hostService.getHostById(parseInt(this.hostID))
               // console.log(this.hosts);
            }
 }


