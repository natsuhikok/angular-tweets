import { Component, Input, Output, EventEmitter } from '@angular/core';
import { range } from "lodash";

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent {
  @Output() sendNextPageNumber: EventEmitter<number> = new EventEmitter();
  @Input() current: number;
  @Input() last: number;
  range = range;
  handleClick(next: number) {
    this.sendNextPageNumber.emit(next);
  }
  constructor() { }
}
