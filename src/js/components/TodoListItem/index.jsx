import React from 'react';
import { Icon, ListItem, ListItemAction, ListItemContent } from 'react-mdl';
import './style.css';

export default class TodoListItem extends React.Component {
  static propTypes = {
    remove: React.PropTypes.func.isRequired,
    label: React.PropTypes.string.isRequired,
    id: React.PropTypes.number.isRequired,
  };

  removeItem = () => {
    const { remove, id } = this.props;

    remove(id);
  };

  render() {
    const { label } = this.props;

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
          {label}
        </ListItemContent>
      </ListItem>
    );
  }
}
