import { get, post, del } from '../lib/api';

export const ADD_ITEM = 'ADD_ITEM';
export const ALL_TODO = 'ALL_TODO';
export const REMOVE_ITEM = 'REMOVE_ITEM';

export function addTodo(dispatch, todoLabel, userId) {
  const body = {
    label: todoLabel,
    compoleted: false,
    user_id: userId,
  };

  return post('/todo-item', body)
    .then(response => response.json())
    .then((todo) => {
      dispatch({
        type: ADD_ITEM,
        todo,
      });

      return todo;
    });
}

export function deleteTodo(dispatch, id) {
  const url = `/todo-item/${id}`;

  del(url).then(() => {
    dispatch({
      type: REMOVE_ITEM,
      id,
    });
  });
}

export function todoAll(dispatch) {
  get('/todo-item')
    .then((todos) => {
      dispatch({
        type: ALL_TODO,
        todos,
      });
    });
}

