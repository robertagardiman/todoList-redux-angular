import {Action} from '@ngrx/store';

export const FILTER = '[filter] filter value';

export class FilterToDo implements Action {
  readonly type = FILTER;
  constructor(public payload: any) {
    this.payload = payload;
  }
}

export type filterActions = FilterToDo;
