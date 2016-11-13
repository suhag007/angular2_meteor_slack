import {
    Component,
    OnInit
} from '@angular/core';
import {
    Router
} from '@angular/router';
import { 
    InjectUser 
} from 'angular2-meteor-accounts-ui';
import {
    Mongo
} from 'meteor/mongo';
import {
    Meteor
} from 'meteor/meteor';

import template from './home.html';

@Component({
    selector: 'home',
    template
})
@InjectUser('user')
export class HomeComponent implements OnInit {
 user: Meteor.User;
    constructor(private _router: Router) {}

    ngOnInit() { }
     logout() {
        var self = this;
        Meteor.logout(function(error) {
            if (error) {
                console.log("ERROR: " + error.reason);
            } else {
                self._router.navigate(['/login']);
            }
        });
    }

}