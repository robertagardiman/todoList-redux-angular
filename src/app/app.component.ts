import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  cta = 'Add to do';
  listItemValue: number;
  toDoItems: any;
  counterId: number;

  ngOnInit() {
    this.toDoItems = [];
    this.counterId = 0;
  }

  public addTodo() {
    this.toDoItems = [
      ...this.toDoItems,
      {
        id: ++this.counterId,
        value: this.listItemValue,
        done: false
      }
    ];
    console.log('item added: ', this.listItemValue, this.toDoItems);
  }
}

