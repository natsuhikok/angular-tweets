import { Component, OnInit, Input } from '@angular/core';
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
  constructor(public tweetService: TweetService) {}

  tweets: Tweet[] = [];
  currentTweets: Tweet[];
  currentPage: number = 0;
  lastPage: number = 0;
  private searchTerms = new Subject<string>();

  search(term: string): void {
    this.searchTerms.next(term);
  }
  paging(next: number): void {
    this.currentPage = next;
    this.currentTweets = this.tweets.slice((next - 1) * 10, (next - 1) * 10 + 10);
  }
  pageInit(tweets: Tweet[]) {
    this.tweets = tweets;
    this.lastPage = Math.ceil(tweets.length / 10);
    if (tweets.length <= 10) {
      this.currentTweets = tweets;
      this.currentPage = 0;
    } else {
      this.paging(1);
    }
  }
  ngOnInit(): void {
    this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.tweetService.searchTweets(term, this.type.toLowerCase())),
    ).subscribe(tweets => this.pageInit(tweets));
  }
}