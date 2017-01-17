import {Component} from '@angular/core';
import {Host, HostService} from 'app/services/host-service';
import CarouselComponent from '../carousel/carousel';
import HostItemComponent from '../host-item/host-item';

@Component({
  selector: 'auction-home-page',
  styleUrls: ['app/components/home/home.css'],
  template: `
    <div class="row carousel-holder">
      <div class="col-md-12">
        <auction-carousel></auction-carousel>
      </div>
    </div>
    <div class="row">
      <div *ngFor="let host of hosts" class="col-sm-4 col-lg-4 col-md-4">
        <auction-host-item [host]="host"></auction-host-item>
      </div>
    </div>
  `
})
export default class HomeComponent {
  hosts: Host[] = [];

  constructor(private hostService: HostService) {
    this.hosts = this.hostService.gethosts();
  }
}
