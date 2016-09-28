import React from 'react';
import { Icon, ListItem, ListItemAction, ListItemContent } from 'react-mdl';
import './style.css';

export default class TodoListItem extends React.Component {
  static propTypes = {
    remove: React.PropTypes.func.isRequired,
    item: React.PropTypes.string.isRequired,
    index: React.PropTypes.number.isRequired,
  };

  removeItem = () => {
    const { remove, index } = this.props;

    remove(index);
  };

  render() {
    const { item } = this.props;

    return (
      <ListItem>
        <ListItemAction
          onClick={this.removeItem}
          className="remove-todo-item"
        >
          <Icon
            name="delete"
          />
        </ListItemAction>
        <ListItemContent>
          {item}
        </ListItemContent>
      </ListItem>
    );
  }
}
