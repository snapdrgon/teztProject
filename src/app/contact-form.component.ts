import {Component, Input, Output} from '@angular/core';

@Component ({
    selector: 'contact-form',
    templateUrl:'./contact-form.component.html',
    styleUrls:['./contact-form.component.css'],
})

export class ContactFormComponent {

   onSubmit (form) {
       console.log(form);
   }
}