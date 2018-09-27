import {FILTER} from './../actions';

const initialState = 'all';

export const filterReducer = (state: string = initialState, action) => {
  switch (action.type) {
    case FILTER:
      return action.payload;
    default:
      return state;
  }
};
