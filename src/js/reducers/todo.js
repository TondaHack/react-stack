import { Map } from 'immutable';
import constants from '../constants/appConstants';

export default (state = new Map({}), action) => {
  switch (action.type) {
    case constants.ADD_ITEM:
      console.log(action.todo, 'sssssssssssss');
      return state.set(action.todo.id, action.todo);
    case constants.REMOVE_ITEM:
      return state.filter((todo, index) => index !== action.index);
    default:
      return state;
  }
};
