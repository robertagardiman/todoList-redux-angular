import * as todoReducer from './todo.reducer';
import * as filterReducer from './filter.reducer';
import {TodoState} from './todo.reducer';

export interface RootState {
  todos: TodoState;
  filterType: string;
}

export const rootState: any = {
  todos: todoReducer,
  filterType: filterReducer,
};

export * from './todo.reducer';
