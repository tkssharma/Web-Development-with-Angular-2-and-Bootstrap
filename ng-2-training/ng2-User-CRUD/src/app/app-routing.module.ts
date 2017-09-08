import {NgModule}             from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {UsersComponent}      from './users.component/users.component';
import {UserDetailComponent}  from './user-detail.component/user-detail.component';
import {UserAddComponent} from './user-add.component/user-add.component';
import {UserUpdateComponent} from './user-update.component/user-update.component';

const routes: Routes = [
  {path: '', redirectTo: '/users', pathMatch: 'full'},
  {path: 'users', component: UsersComponent},
  {path: 'add', component: UserAddComponent},
  {path: 'detail/:id', component: UserDetailComponent},
  {path: 'update/:id', component: UserUpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
