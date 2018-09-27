import {Action} from '@ngrx/store';

export const ADD = '[toDo] add value';
export const TOGGLE = '[toDo] toggle value';
export const DELETE = '[toDo] delete value';
export const GET = '[toDo] get value';
export const SUCCESS = '[toDo] get value success';
export const ERROR = '[toDo] get value error';

export class AddTodo implements Action {
  readonly type = ADD;
  constructor(public payload: string) {
    this.payload = payload;
  }
}

export class ToggleTodo implements Action {
  readonly type = TOGGLE;
  constructor(public payload: number) {
    this.payload = payload;
  }
}

export class DeleteTodo implements Action {
  readonly type = DELETE;
  constructor(public payload: number) {
  }
}

export class GetTodos implements Action {
  readonly type = GET;
  constructor(public payload?: any[]) {
  }
}

export class OnTodosSuccess implements Action {
  readonly type = SUCCESS;
  constructor(public payload?: any[]) {
  }
}

export class OnTodosError implements Action {
  readonly type = ERROR;
  constructor(public payload: any[]) {
  }
}

export type todoActions = AddTodo | ToggleTodo | DeleteTodo | GetTodos | OnTodosSuccess |OnTodosError;
