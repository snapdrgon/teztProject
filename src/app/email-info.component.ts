import {Component, Input} from '@angular/core';

@Component ({
    selector: 'email-info',
    templateUrl:'./email-info.component.html',
})

export class EmailInfoComponent {
 @Input() emailFreq: {id:number, freq:string} [] = [{id:1,freq:'Daily'}, {id:2,freq:'Weekly'},{id:3,freq: 'Monthly'}];
    

   onSubmit (form) {
       console.log(form);
   }
}