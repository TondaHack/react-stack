import { connect } from 'react-redux';
import React from 'react';
import { Grid } from 'react-mdl';
import ImmutablePropTypes from 'react-immutable-proptypes';
import AddItem from '../TodoAddItem/index';
import List from './../TodoList/index';
import { addTodo, deleteTodo } from '../../actions';

const ListContainer = (props) => {
  const { todos, deleteTodoItem, addTodoItem } = props;

  console.log(todos);

  return (
    <Grid>
      <AddItem add={addTodoItem} />
      <List items={todos} remove={deleteTodoItem} />
    </Grid>
  );
};

ListContainer.propTypes = {
  deleteTodoItem: React.PropTypes.func.isRequired,
  addTodoItem: React.PropTypes.func.isRequired,
  todos: ImmutablePropTypes.map.isRequired,
};

const stateTodo = todos => ({
  todos: todos.todo,
});
const dispatchTodo = dispatch => ({
  addTodoItem: text => addTodo(dispatch, text),
  deleteTodoItem: id => dispatch(deleteTodo(id)),
});

export default connect(stateTodo, dispatchTodo)(ListContainer);
