import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home";
import {ProductDetailComponent} from "./product";
import {_404Component} from './404';

const routes: Routes = [
    {path: '',        component: HomeComponent},
    {path: 'product', component: ProductDetailComponent},
    {path: '404', component: _404Component}
];

export const routing = RouterModule.forRoot(routes);