import {Component} from '@angular/core'

@Component({
    selector:'radio-styling',
    templateUrl:'app/radiostyling.component.html',
    styleUrls:['app/radiostyling.component.css']
})
export class RadioStylingComponent{
    isChecked:number[];
    testElement:string='#testElement';

    constructor() {
        this.isChecked=[1,3,5,7];
    }
}