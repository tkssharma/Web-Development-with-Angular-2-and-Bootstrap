  import { Component } from '@angular/core';
  import {AppServiceService} from './app-service.service';
  import {USERS} from './users';

  @Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
  })

  export class AppComponent {
    users: any[] = [];
    canFly = true;
    mutate = true;
    title = 'Flying users';

    constructor() { this.reset(); }

    addHero(name: string) {
      name = name.trim();
      if (!name) { return; }
      let hero = {name, canFly: this.canFly};
      if (this.mutate) {
      this.users.push(hero);
      } else {
        this.users = this.users.concat(hero);
      }
  }
  reset() { this.users = USERS.slice(); }

  }
