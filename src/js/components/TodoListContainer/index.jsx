import { connect } from 'react-redux';
import React from 'react';
import { Grid } from 'react-mdl';
import ImmutablePropTypes from 'react-immutable-proptypes';
import AddItem from '../TodoAddItem/index';
import List from './../TodoList/index';
import { addTodo, deleteTodo } from '../../actions';

const ListContainer = (props) => {
  const { todos, deleteTodoItem, addTodoItem } = props;

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
  todos: ImmutablePropTypes.listOf(React.PropTypes.string).isRequired,
};

const stateTodo = todos => ({
  todos,
});
const dispatchTodo = dispatch => ({
  addTodoItem: text => dispatch(addTodo(text)),
  deleteTodoItem: id => dispatch(deleteTodo(id)),
});

export default connect(stateTodo, dispatchTodo)(ListContainer);
