import { Pipe, PipeTransform } from '@angular/core';
import { User } from './users';

@Pipe(
  { name: 'flyingUsers' }
  )
export class userPipe implements PipeTransform {
  transform(allUsers: User[]) {
    return allUsers.filter(hero => hero.canFly);
  }
}
