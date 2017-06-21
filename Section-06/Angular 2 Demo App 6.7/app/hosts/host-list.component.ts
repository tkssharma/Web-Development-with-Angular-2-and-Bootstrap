import {PipeTransform,Component,Pipe,OnInit,OnDestroy } from '@angular/core';

import { IHost } from './host'
import { HostFilterPipe } from './host-filter.pipe';
import {HostService} from '../shared/host-services';

@Component({
    selector: 'pm-hosts',
    templateUrl: 'app/hosts/host-list.component.html',
    styleUrls: ['app/hosts/host-list.component.css']
})
export class HostListComponent implements OnInit,OnDestroy {
    hosts:IHost[];
    constructor(private productService:HostService){
    }

    pageTitle: string = 'Host List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    dishAdded ; boolean = false;;
    listFilter: string = 'cart';
    toggleDish() : void{
      console.log('adding dish item from Host');
      this.dishAdded = ! this.dishAdded
    }

    ngOnInit(): void {
        this.hosts = this.productService.getHosts();
        console.log(this.hosts);
    }
    ngOnDestroy(): void {
        console.log(this.hosts);
    }

}
