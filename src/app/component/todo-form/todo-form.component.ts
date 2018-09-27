import {Component, OnInit, EventEmitter, Output, ChangeDetectionStrategy} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoFormComponent implements OnInit {
  cta = 'Add todo';
  todoInputValue: string;
  todoForm: any;

  @Output() todoValue: EventEmitter<string> = new EventEmitter();
  constructor(private formBuilder: FormBuilder) {
    this.todoForm = this.formBuilder.group({
      'todoInputValue': ['', Validators.required],
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    if (this.todoForm.valid) {
      this.todoValue.emit(this.todoForm.get('todoInputValue').value);
      this.todoForm.reset();
    } else {
      console.log('form not valid');
    }
  }
}
