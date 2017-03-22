import { Injectable } from '@angular/core';


@Injectable()

export class TweetService {
    getTweets() : {handle:string, mention:string, message:string, likeCount:number, image:string} []{
        return [{handle:'Mortimer', mention:'@skydumpster', message: 'trouble comes in many flavors', likeCount:13,
               image:'http://lorempixel.com/100/100/people/?1'},
                {handle:'Lester', mention:'@redrum', message: 'technical discusions to follow', likeCount:3,
               image:'http://lorempixel.com/100/100/people/?2'},
                {handle:'MaryWampus', mention:'@swinhammer', message: 'how to make a cup of coffee', likeCount:5,
               image:'http://lorempixel.com/100/100/people/?3'}]
    }

}