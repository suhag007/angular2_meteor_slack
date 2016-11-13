import {
    Route
} from '@angular/router';
import { 
Meteor 
} from 'meteor/meteor';

import {
    LoginComponent
} from './src/logincomponent/loginComponent';

import {
    HomeComponent
} from './src/homecomponent/homeComponent';
//import {
//    MessageArea
//} from './src/homecomponent/messagearea/messageArea';

export const routes: Route[] = [{
    path: '',
    redirectTo: "login",
    pathMatch: "full"
}, 
{
    path: 'login',
    component: LoginComponent
}, 
{
    path: 'home',
    component: HomeComponent,
//    canActivate: ['canActivateForLoggedIn'],
//    children: [{
//        path: '',
//        redirectTo: 'dashboard'
//    }, 
//    {
//        path:'messagearea',
//        component: MessageArea
//    }
//    ]
}];

export const ROUTES_PROVIDERS = [{
  provide: 'canActivateForLoggedIn',
  useValue: () => !! Meteor.userId()
}];