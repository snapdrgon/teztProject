import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import {AuthorsComponent} from './authors.component';
import {TooltipComponent} from './tooltip.component';
import { AppComponent } from './app.component';
import {RadioStylingComponent} from './radiostyling.component';
import {AuthorService} from './author.service';
import {VoteService} from './vote.service';
import {FavoriteComponent} from  './favorite.component';
import {LikeComponent} from './like.component';
import {VoteComponent} from './vote.component';
import {TweetComponent} from './tweet.component';
import {TweetService} from './tweet.service';
import {ZippyComponent} from './zippy.component';
import {PanelComponent} from './bs-panel.component';
import {ContactFormComponent} from './contact-form.component';
import {EmailInfoComponent} from './email-info.component';
import {SignUpFormComponent} from './signup-form.component';
import {PasswordChangeComponent} from './password-change.component';
import {GithubUserComponent} from './github.user.component';
import {GithubUserService} from './github.user.service'

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,AuthorsComponent,TooltipComponent, RadioStylingComponent, 
    FavoriteComponent, LikeComponent, VoteComponent, TweetComponent, ZippyComponent,
    PanelComponent, ContactFormComponent, EmailInfoComponent, SignUpFormComponent,
    PasswordChangeComponent, GithubUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    JsonpModule,
    NgbModule.forRoot()
  ],
  providers: [AuthorService, VoteService, TweetService, GithubUserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
