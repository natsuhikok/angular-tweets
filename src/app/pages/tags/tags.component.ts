import { Component, OnInit } from '@angular/core';
import { TWEETS } from '../../mock-tweets';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {
  tweets = TWEETS;
  constructor() { }

  ngOnInit() {
  }

}
