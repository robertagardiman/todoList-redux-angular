import {createSelector} from '@ngrx/store';
import {RootState} from '../reducers';

export const todosSelector = createSelector((state: RootState) => state.todos.items);
export const filterTypeSelector = createSelector((state: RootState) => state.filterType);

export const filterSelector =  createSelector(
  todosSelector,
  filterTypeSelector,
  (list, filterType) => {
    if (filterType === 'done') {
      return list.filter(el => el.done);
    } else if (filterType === 'todo') {
      return list.filter(el => !el.done);
    } else {
      return list;
    }
  }
);
