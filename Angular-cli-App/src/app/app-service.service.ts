import { Injectable } from '@angular/core';

@Injectable()
export class AppServiceService {

  sayhello():string{
    return 'say hello from service';
  }
  constructor() { }

}
