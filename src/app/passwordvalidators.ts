import { FormControl, FormGroup} from '@angular/forms';

export class PasswordValidators {

  static passwordMismatch(group:FormGroup) {
      return new Promise((resolve, reject)=>{

          setTimeout(function() {
              console.log('In passwordMismatch');
            var newPassword = group.get('newPassword');
            console.log(newPassword.value);
            var verifyPassword = group.get('verifyPassword');
             console.log(verifyPassword.value);
            if (newPassword.value!==verifyPassword.value) 
                resolve({passwordMismatch:true})
            else
                resolve(null);

          },1000)
 
      })
  }

  static passwordCheckBad(control:FormControl) {
      var prevPassword = 'mortimer';
      return new Promise((resolve, reject)=>{         
          setTimeout(function() {         
            if (control.value!=prevPassword) 
                resolve({passwordCheckBad:true})
            else
                resolve(null);

          },1000)
 
      })
  }

   static cannotContainSpace(control:FormControl) {
        if (control.value.indexOf(' ') >=0) 
        return {cannotContainSpace:true};

        return null;
    }
}