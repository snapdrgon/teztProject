import {Component, Input, Output, EventEmitter} from '@angular/core';
import {TweetService} from './tweet.service';
import {LikeComponent} from './like.component';

@Component ({
    selector: 'tweet',
     templateUrl:'./tweet.component.html',
    styleUrls:['./tweet.component.css'],
})

export class TweetComponent {
 @Output() tweetFeed = new EventEmitter();
 tweets:  {handle:string, mention:string, message:string, likeCount:number, image:string}[];

 constructor(private _tweetService: TweetService)  {
    this.tweets = _tweetService.getTweets();
 }



}