import {Component} from '@angular/core';
import {FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
import {PasswordValidators} from './passwordvalidators';

@Component( {
 selector: 'password-change',
 templateUrl: 'app/password-change.component.html',
})

export class PasswordChangeComponent {

    minLength:number=5;

    passwordForm:FormGroup;

    constructor(fb:FormBuilder) {
        this.passwordForm = fb.group({
            oldPassword:['',Validators.required,PasswordValidators.passwordCheckBad],
            newPassword:['', Validators.compose([Validators.required,Validators.minLength(this.minLength),
             PasswordValidators.cannotContainSpace]) ],
            verifyPassword:['', Validators.required]
        },{asyncValidator: PasswordValidators.passwordMismatch})

    }
          changePassword() {
            console.log(this.passwordForm);
        }

}