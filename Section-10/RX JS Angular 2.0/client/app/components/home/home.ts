import {Component} from '@angular/core';
import {Observable} from "rxjs/Observable";

import {Host, HostService} from 'app/services/host-service';

@Component({
  selector: 'auction-home-page',
  styleUrls: ['app/components/home/home.css'],
  template: `
    <div class="row carousel-holder">
      <div class="col-md-12">
        <ng-carousel></ng-carousel>
      </div>
    </div>
    <div class="row">
      <div *ngFor="let host of hosts | async" class="col-sm-4 col-lg-4 col-md-4">
        <ng-host-item [host]="host"></ng-host-item>
      </div>
    </div>
  `
})
export default class HomeComponent {
  hosts: Observable<Host[]>;

  constructor(private hostService: HostService) {
    this.hosts = this.hostService.getHosts();

    this.hostService.searchEvent
      .subscribe(
        params => this.hosts = this.hostService.search(params),
          err =>  console.log("Can't get hosts "),
        () => console.log('DONE')
      );
  }
}
