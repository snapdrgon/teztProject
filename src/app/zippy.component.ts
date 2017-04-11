import {Component, Input, Output} from '@angular/core';
import {PanelComponent} from './bs-panel.component';



@Component ({
    selector: 'zippy',
     templateUrl:'./zippy.component.html',
     styleUrls: ['./zippy.component.css']

})

export class ZippyComponent {
    @Input('title') title:string;
    hideBody:boolean=true;

    onClick() {
        this.hideBody = !this.hideBody;
    }
    
}
