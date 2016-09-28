import { List } from 'immutable';
import constants from '../constants/appConstants';

export default (state = new List([]), action) => {
  switch (action.type) {
    case constants.ADD_ITEM:
      return state.unshift(action.todo);
    case constants.REMOVE_ITEM:
      return state.filter((todo, index) => index !== action.index);
    default:
      return state;
  }
};
