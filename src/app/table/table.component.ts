import { Component, Input } from '@angular/core';
import Tweet from '../tweet';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent {
  @Input() tweets: Tweet[];
}
