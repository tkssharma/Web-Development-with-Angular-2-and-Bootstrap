import 'rxjs/add/operator/switchMap';
import {Component, OnInit} from '@angular/core';
import {User} from '../model/user';
import {ActivatedRoute, Params} from '@angular/router';
import {Location} from '@angular/common';
import * as _ from 'lodash'; 

@Component({
  selector: 'user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['../app.component.css']
})

export class UserDetailComponent implements OnInit{
  user: User;
  private sub: any;

  constructor(
    private route: ActivatedRoute,
    private location: Location
  ){};

  ngOnInit(): void {
     this.sub = this.route.params.subscribe(params => {
       let users = JSON.parse(localStorage.getItem("users"));
       this.user = _.find(users, {"_id" : params['id']});
    });
  }

  goBack(): void{
    this.location.back();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
