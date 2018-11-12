import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import Tweet from '../tweet';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent {
  @Input() tweets$: Observable<Tweet[]>;
}
