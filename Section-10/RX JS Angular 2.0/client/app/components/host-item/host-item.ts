import {Component, Input} from '@angular/core';
import {Host} from '../../services/host-service';

@Component({
  selector: 'ng-host-item',
  templateUrl: 'app/components/host-item/host-item.html',
  styleUrls: ['app/components/host-item/host-item.css']
})
export default class HostItemComponent {
  @Input() host: Host;
}
