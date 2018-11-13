import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, tap } from 'rxjs/operators';
import Tweet from './tweet';

@Injectable()
export class TweetService {
  message: string = '';
  constructor(private http: HttpClient) {}
  private URL = 'https://am-twitter-scrape.herokuapp.com';

  searchTweets(term: string, type: string): Observable<Tweet[]> {
    if (!term.trim()) {
      this.message = '';
      return of([]);
    }
    this.message = 'loading...';
    return this.http.get<Tweet[]>(`${this.URL}/${type}s/${term}`).pipe(
      tap(() => this.message = ''),
      catchError(this.handleError([])),
    )
  };
  private handleError<T> (result: T) {
    return (): Observable<T> => {
      this.message = 'something wrong. try it later.';
      return of(result as T);
    };
  };
}
