import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {
  filters: any;
  filterType: string;
  @Output() filtersList: EventEmitter<any> = new EventEmitter();
  @Output() currentFilterType: EventEmitter<string> = new EventEmitter();
  constructor() { }

  ngOnInit() {
    this.filters = ['all', 'todo', 'done'];
    this.filtersList.emit(this.filters);
  }

  setFilterType(type) {
    this.filterType = type;
    this.currentFilterType.emit(type);
  }
}
