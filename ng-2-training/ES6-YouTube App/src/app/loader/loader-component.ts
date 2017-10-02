import {Component, OnInit, OnDestroy,Input} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {LoaderService} from './loader-service';
import {LoaderState} from './loader';

@Component({
    selector: 'ng-loader',
    templateUrl: './loader-component.html'
    })
export default class LoaderComponent implements OnInit {
    @Input() loaded : boolean = false;
    private subscription : Subscription;
    constructor(private loaderService : LoaderService) {}
    ngOnInit() {
       // this.loaderService.show();
        this.subscription = this
            .loaderService
            .loaderState
            .subscribe((state : LoaderState) => {
                this.loaded = state.loaded;
            });
    }
    ngOnDestroy() {
        this
            .subscription
            .unsubscribe();
    }
}