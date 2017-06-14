import { Routes } from '@angular/router';

import { AboutComponent, AboutHomeComponent, AboutItemComponent } from 'app/about.component';
import { HomeComponent } from 'app/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'about',
    component: AboutComponent,
    children: [
      { path: '', component: AboutHomeComponent },
      { path: 'item/:id', component: AboutItemComponent }
    ]
  }
];