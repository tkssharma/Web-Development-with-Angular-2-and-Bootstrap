import {Component} from '@angular/core';
import {Host, HostService} from '../../services/host-service';


@Component({
	selector: 'host-detail',
	template: `<auction-host-item [host]="host"></auction-host-item>`,
})
export default class HostDetailComponent {
	host: Host;
	constructor(private hostService: HostService) {
		this.host = this.hostService.getHostById(3);
		console.log(this.host);
	}
}



