import {Component, OnInit} from '@angular/core';
import {GithubUserService} from './github.user.service'
import {UserInfoDTO} from './UserInfo';


@Component ({
    selector: 'github-user',
    templateUrl: './github.user.component.html',
    styleUrls:[ './github.user.component.css'],
})

export class GithubUserComponent implements OnInit {

    user: UserInfoDTO = {userName:'', urlAvatar:''};
    followers: UserInfoDTO [] = [];


    constructor (private _gitHubService: GithubUserService) {};

    ngOnInit() {
       this._gitHubService.getFollowers('octocat')
       .subscribe(x=>{
           this.user.userName =  x.user.login;
           this.user.urlAvatar = x.user.avatar_url;
           x.followers.forEach(f=>{
                this.followers.push({ userName : f.login , urlAvatar:f.avatar_url})
           })
        });
        console.log(this.user);
        console.log(this.followers);
    }
}

   
