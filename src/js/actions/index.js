import constants from '../constants/appConstants';

export function addTodo(todo) {
  return {
    type: constants.ADD_ITEM,
    todo,
  };
}

export function deleteTodo(index) {
  return {
    type: constants.REMOVE_ITEM,
    index,
  };
}
