import { Map } from 'immutable';
import { SET_USER } from '../actions/authentication';

const initState = {
  user: {},
};

export default (state = new Map(initState), action) => {
  switch (action.type) {
    case SET_USER:
      return state.set('user', action.user);
    default:
      return state;
  }
};
