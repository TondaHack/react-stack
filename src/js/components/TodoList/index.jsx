import React, { PropTypes } from 'react';
import { Cell, List } from 'react-mdl';
import ImmutablePropTypes from 'react-immutable-proptypes';
import TodoListItem from '../TodoListItem/index';


export default class TodoList extends React.Component {
  static propTypes = {
    remove: PropTypes.func.isRequired,
    items: ImmutablePropTypes.map.isRequired,
  };

  renderLiItem = (item, index) => {
    const { remove } = this.props;

    return (
      <TodoListItem remove={remove} item={item} key={index} index={index} />
    );
  };

  render() {
    const { items } = this.props;
    const listItems = items.map(this.renderLiItem);

    return (
      <Cell col={12}>
        <List>
          {listItems}
        </List>
      </Cell>
    );
  }
}
