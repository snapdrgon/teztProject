import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/RX';
import {Injectable} from '@angular/core';
import {UserInfo} from './userinfo';
// Users:https://api.github.com/users/octocat
// Followers:https://api.github.com/users/octocat/followers
//  "login": "octocat",
//   "avatar_url": "https://avatars0.githubusercontent.com/u/583231?v=3",

@Injectable()
export class GithubUserService {
    private _url = "https://api.github.com/users/";

    constructor(private _http: Http){}

    getFollowers(user:string) : Observable<{user:UserInfo, followers:UserInfo[]}> {
        var userObservable = this._http.get(this._url + user)
        .map(resp=>resp.json());
        var followerObservable = this._http.get(this._url + user + "/followers")
        .map(resp=>resp.json());
        var followers = Observable
        .forkJoin(userObservable,followerObservable)
        .map(joined=>new Object({user:joined[0], followers:joined[1]}));
        // followers
        // .subscribe(x=>console.log(x));
        return followers;
    }

} 