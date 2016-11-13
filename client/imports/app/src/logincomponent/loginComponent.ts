import {
    Component,
    OnInit
} from '@angular/core';
import {
    Router
} from '@angular/router';
import {
    Mongo
} from 'meteor/mongo';
import {
    Meteor
} from 'meteor/meteor';

import {
    FormGroup,
    FormBuilder,
    Validators
} from '@angular/forms';
import template from './login.html';

@Component({
    selector: 'login',
    template
})
export class LoginComponent implements OnInit {
    addForm: FormGroup;
    email: string;
    password: string;
    message: string;
    showmessage: boolean = false;
    loginprocess: boolean;
    constructor(private formBuilder: FormBuilder, private _router: Router) {

    }

    ngOnInit() {
        //  *** checking if user is already login ***
       if (Meteor.userId()) {
           this._router.navigate(['home']);
       }
        this.addForm = this.formBuilder.group({
            email: ['', Validators.required],
            password: ['', Validators.required]
        });
        this.loginprocess = false;
    }
 login() {
        var self = this;
        self.loginprocess = true;
        if (this.addForm.valid) {
            this.email = this.addForm.controls['email'].value;
            this.password = this.addForm.controls['password'].value;
            Meteor.loginWithPassword(this.email, this.password, function(error) {
                if (Meteor.user()) {
                    self._router.navigate(['/home']);
                } else {
                    self.loginprocess = false;
                    self.showmessage = true;
                    self.message = error.reason;
                }
            });
        }
    }
}