import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component( {
    selector: 'favorite',
    templateUrl: './favorite.component.html',
    host: {
        '(click)': 'onClick()'
    },

})

export class FavoriteComponent {
   @Input('is-filled') isFilled:boolean = true;

 onClick() {
    this.isFilled=!this.isFilled;
    this.change.emit({newValue:this.isFilled});
  }

  @Output() change = new EventEmitter();

}

 


