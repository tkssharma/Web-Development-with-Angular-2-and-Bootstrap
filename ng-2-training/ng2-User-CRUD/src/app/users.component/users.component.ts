import {Component, OnInit} from '@angular/core';
import {User} from '../model/user';
import {Router} from '@angular/router';
import * as _ from 'lodash'; 

@Component({
  selector: 'my-users',
  templateUrl: './users.component.html',
  styleUrls: ['../app.component.css']
})

export class UsersComponent implements OnInit {
  users: User[];

  constructor(private router: Router) {
  }

  /**
   * Gets the existing users
   */

  ngOnInit(): void {
    this.users = JSON.parse(localStorage.getItem("users"))
    console.log("this.users",this.users);
    if(!this.users) {
      localStorage.setItem("users",JSON.stringify([]));
    }
  }

  /**
   * Update the selected user
   */

  update(id: string): void {
    this.router.navigate(['/update', id]);
  }


  findIndex(id : string): number {
    let index;
    for (var i = this.users.length - 1; i >= 0; i--) {
      if(this.users[i]._id == id) {
        index = i;
        break;
      }
    }
    return index;
  }
    /**
   * Remove the selected user
   */
   
  remove(id: string): void {
    this.users.splice(this.findIndex(id),1);
    localStorage.setItem("users",JSON.stringify(this.users));
  }

  /**
   * View selected user
   */

  viewDetail(id: string): void {
    this.router.navigate(['/detail', id]);
  }
}
