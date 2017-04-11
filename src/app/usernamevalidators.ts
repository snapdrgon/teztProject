import { FormControl} from '@angular/forms';
export class UserNameValidators {

   static shouldBeUnique(control:FormControl) {
       return new Promise((resolve, reject) =>
       {
           setTimeout(function() {
            if (control.value === 'lynn')
                resolve({shouldBeUnique:true});
            else
                resolve(null);
           },1000);
       });

   }

    static cannotContainSpace(control:FormControl) {
        if (control.value.indexOf(' ') >=0) 
        return {cannotContainSpace:true};

        return null;
    }
}