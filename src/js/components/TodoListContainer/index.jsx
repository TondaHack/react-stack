import { connect } from 'react-redux';
import React from 'react';
import { Grid } from 'react-mdl';
import ImmutablePropTypes from 'react-immutable-proptypes';
import AddItem from '../TodoAddItem/index';
import List from './../TodoList/index';
import { addTodo, deleteTodo } from '../../actions';

const ListContainer = (props) => {
  const { todos, deleteTodoItem, addTodoItem, user } = props;

  return (
    <Grid>
      <AddItem add={addTodoItem} user={user} />
      <List items={todos} remove={deleteTodoItem} />
    </Grid>
  );
};

ListContainer.propTypes = {
  deleteTodoItem: React.PropTypes.func.isRequired,
  addTodoItem: React.PropTypes.func.isRequired,
  todos: ImmutablePropTypes.map.isRequired,
  user: ImmutablePropTypes.map.isRequired,
};

const stateTodo = state => ({
  todos: state.todo,
  user: state.user,
});
const dispatchTodo = dispatch => ({
  addTodoItem: (text, userId) => addTodo(dispatch, text, userId),
  deleteTodoItem: id => deleteTodo(dispatch, id),
});

export default connect(stateTodo, dispatchTodo)(ListContainer);
