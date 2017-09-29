import {Component, OnInit, OnDestroy} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {LoaderService} from './loader-service';
import {LoaderState} from './loader';

@Component({
    selector: 'ng-loader',
    templateUrl: './loader-component.html'
    })
export default class LoaderComponent implements OnInit {
    show = false;
    private subscription : Subscription;
    constructor(private loaderService : LoaderService) {}
    ngOnInit() {
       // this.loaderService.show();
        this.subscription = this
            .loaderService
            .loaderState
            .subscribe((state : LoaderState) => {
                this.show = state.show;
            });
    }
    ngOnDestroy() {
        this
            .subscription
            .unsubscribe();
    }
}