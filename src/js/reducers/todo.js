import { Map, fromJS } from 'immutable';
import { ADD_ITEM, ALL_TODO, REMOVE_ITEM } from '../actions/todo';

function transformData(todoList = []) {
  const todos = {};

  todoList.forEach((todo) => {
    todos[todo.id] = todo;
  });

  return todos;
}

export default (state = new Map({}), action) => {
  switch (action.type) {
    case ADD_ITEM:
      return state.set(action.todo.id, new Map(action.todo));
    case ALL_TODO:
      return fromJS(transformData(action.todos));
    case REMOVE_ITEM:
      return state.filter(todo => todo.get('id') !== action.id);
    default:
      return state;
  }
};
