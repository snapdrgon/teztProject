import { Injectable } from '@angular/core';


@Injectable()

export class VoteService {
    upDateVoteCount (voteCount:{count:number, incFlag:number, clickCount:number}):{count:number, incFlag:number, clickCount:number}{
       switch(voteCount.incFlag) {
           case 1:
           if (voteCount.clickCount > -2)
            voteCount.count = voteCount.count - 1;
           break;
           case 2:
           if (voteCount.clickCount < 2)
          voteCount.count = voteCount.count + 1;
           break;
       }
       console.log('voteService count:' + voteCount.count);
       return voteCount;

    }
}