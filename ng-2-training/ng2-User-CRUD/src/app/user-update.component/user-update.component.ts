import 'rxjs/add/operator/switchMap';
import {Component, OnInit} from '@angular/core';
import {User} from '../model/user';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Location} from '@angular/common';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import * as _ from 'lodash'; 

@Component({
  selector: 'update-user',
  templateUrl: './user-update.component.html',
  styleUrls: ['../app.component.css']
})

export class UserUpdateComponent implements OnInit {
  userUpdateForm: FormGroup;
  user: User;
  private sub: any;
  private _id : string;

  constructor(
              private router: Router,
              private route: ActivatedRoute,
              private location: Location,
              private formBuilder: FormBuilder) {
  };

  ngOnInit(): void {
    let users = JSON.parse(localStorage.getItem("users"));
    this.sub = this.route.params.subscribe(params => {
       this.user = _.find(users, {"_id" : params['id']});
       this._id = params['id'];
       this.buildForm();
    });
  }

  buildForm(): void {
    this.userUpdateForm = this.formBuilder.group({
      firstName: [this.user.firstName, Validators.required],
      lastName: [this.user.lastName, Validators.required],
      email: [this.user.email, [Validators.required, Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
      _id: [this.user._id],
      mobileNumber: [this.user.mobileNumber, Validators.required],
    });
  }

  update(): void {
    // debugger;
    let user = this.userUpdateForm.value as User;
    let users = JSON.parse(localStorage.getItem("users"));
    let index;
    for (var i = users.length - 1; i >= 0; i--) {
      if(users[i]._id == this._id) {
        index = i;
        break;
      }
    }
    users.splice(index,1,user);
    localStorage.setItem("users",JSON.stringify(users));
    this.router.navigate(['/users']);
  }

  goBack(): void {
    this.location.back();
  }
}
