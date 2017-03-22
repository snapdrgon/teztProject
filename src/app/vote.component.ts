import {Component, Input, Output, EventEmitter} from '@angular/core';
import {VoteService} from './vote.service';


@Component ({
    selector: 'vote',
     templateUrl:'./vote.component.html',
    styleUrls:['./vote.component.css'],
})


export class VoteComponent {

    @Input() voteCnt: {count:number, incFlag:number, clickCount:number};
    @Output() incVote = new EventEmitter();



    constructor (private _voteService: VoteService) {
        this.voteCnt =  {
            count:10,
            incFlag:0,
            clickCount:0
        }
    } 

    onClickUp() {
        console.log('onClickUp - here')
        this.voteCnt.incFlag = 2; //increment
        if (this.voteCnt.clickCount < 0) 
            this.voteCnt.clickCount = 0; //reset to zero since we're incrementing now
        else 
            if (this.voteCnt.clickCount < 2)
                this.voteCnt.clickCount = this.voteCnt.clickCount + 1; //just increment
        this.upDater(this.voteCnt);
    }

    onClickDown() {
        console.log('onClickDown - here')
        this.voteCnt.incFlag = 1; //decrement
       if (this.voteCnt.clickCount > 0) 
            this.voteCnt.clickCount = 0; //reset to zero since we're decrementing now
        else 
            if (this.voteCnt.clickCount > -2)
                this.voteCnt.clickCount = this.voteCnt.clickCount - 1; //just decrement
        this.upDater(this.voteCnt);
    }

    private upDater(voteInfo){
        this.incVote.emit(this._voteService.upDateVoteCount(voteInfo));
    }
    
}