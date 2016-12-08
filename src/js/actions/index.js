import constants from '../constants/appConstants';
import { get, post } from '../lib/api';

export function addTodo(dispatch, todo) {
  const body = {
    label: todo,
    compoleted: false,
    user_id: 2,
  };

  return post('/todo-item', body)
    .then(response => response.json())
    .then((todoItem) => {
      dispatch({
        type: constants.ADD_ITEM,
        todo: todoItem,
      });

      return todoItem;
    });
}

export function deleteTodo(index) {
  return {
    type: constants.REMOVE_ITEM,
    index,
  };
}


export function todoList() {
  get('/todo-item')
    .then(response => response.json())
    .then((json) => {
      console.log(json);
    });
}
