import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
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
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,AuthorsComponent,TooltipComponent, RadioStylingComponent, 
    FavoriteComponent, LikeComponent, VoteComponent, TweetComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot()
  ],
  providers: [AuthorService, VoteService, TweetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
