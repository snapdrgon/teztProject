import {Component, Input} from '@angular/core';

@Component( {
    selector: 'like',
    templateUrl: './like.component.html',
    styleUrls:['./like.component.css'],
    host: {
        '(click)': 'onClick()'
    },

})

export class LikeComponent {
 @Input() likeCounter:number=10;
 clickFlag:boolean = false;

 onClick() {
    this.clickFlag = !this.clickFlag;
    this.likeCounter = this.clickFlag ? this.likeCounter + 1: this.likeCounter - 1;
  }

}

 


