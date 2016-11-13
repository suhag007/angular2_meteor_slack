import {
    NgModule
} from '@angular/core';
import {
    BrowserModule
} from '@angular/platform-browser';
import {
    FormsModule,
    ReactiveFormsModule
} from '@angular/forms';
import {
    RouterModule
} from '@angular/router';
import {
    AccountsModule
} from 'angular2-meteor-accounts-ui';
import {
    routes,
    ROUTES_PROVIDERS
} from './app.routes';
import {
    ALL_DECLARATIONS
} from './src';
import { 
    AppComponent 
} from './app.component';
 
@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot(routes),
        AccountsModule
    ],
    declarations: [
        AppComponent,
        ...ALL_DECLARATIONS
    ],
    providers: [
        ...ROUTES_PROVIDERS
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {}