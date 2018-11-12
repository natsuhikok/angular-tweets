import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

import Tweet from '../tweet';
import { TweetService } from '../tweet.service';

@Component({
  selector: 'app-tweets',
  templateUrl: './tweets.component.html',
  styleUrls: [ './tweets.component.css' ]
})
export class TweetsComponent implements OnInit {
  @Input() type: string;
  tweets$: Observable<Tweet[]>;
  private searchTerms = new Subject<string>();

  constructor(private tweetService: TweetService) {}

  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.tweets$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.tweetService.searchTweets(term, this.type.toLowerCase())),
    );
  }
}