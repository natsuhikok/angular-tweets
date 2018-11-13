import { Component, Input } from '@angular/core';
import Tweet from '../tweet';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent {
  @Input() tweets: Tweet[];
  displayTweets(tweet: string) {
    if (tweet.length < 50) return tweet;
    return `${tweet.substr(0,(50))}...`
  }
  displayCount(count: number) {
    if (count === 0) return '-';
    return count;
  }
  displayTags(tags: string[]) {
    if (tags.length <= 2) return tags;
    return tags.slice(0, 1);
  }
  displayDate(dateTime: string) {
    const dateSplited = dateTime.split(' - ')[1].split(' ');
    return `${dateSplited[1]} ${dateSplited[0]}, ${dateSplited[2]}`;
  }
}
