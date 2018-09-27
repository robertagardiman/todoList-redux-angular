import {ADD, DELETE, GET, SUCCESS, todoActions, TOGGLE} from './../actions';

export interface TodoState {
  loading: boolean;
  items: any[];
}
const initialState = {loading: false, items: []};

let counterId = 0;

export const toDoReducer = (state = initialState, action: todoActions): TodoState => {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        items: [
          ...state.items,
          {
            id: ++counterId,
            title: action.payload,
            done: false
          }
        ]};
    case TOGGLE:
      return {
        ...state,
        items: state.items.map((listItem) => {
        if (listItem.id === action.payload) {
          return {...listItem, done: !listItem.done};
        }
        return listItem;
      })
      };
    case DELETE:
      return {...state, items: state.items.filter((listItem) => listItem.id !== action.payload)};
    case GET:
      return {
        loading: true,
        items: state.items
      };
    case SUCCESS:
      return {
        loading: false,
        items: [
        ...state.items,
        ...action.payload,
      ]};
    default:
      return state;
  }
};
