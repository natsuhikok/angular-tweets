import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import Tweet from './tweet';

@Injectable()
export class TweetService {
  constructor(private http: HttpClient) {}
  private URL = 'https://am-twitter-scrape.herokuapp.com';

  searchTweets(term: string, type: string): Observable<Tweet[]> {
    if (!term.trim()) return of([]);
    return this.http.get<Tweet[]>(`${this.URL}/${type}s/${term}`);
  };
}
