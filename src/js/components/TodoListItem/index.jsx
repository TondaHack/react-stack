import React from 'react';
import {Icon, ListItem, ListItemAction,ListItemContent } from 'react-mdl';
import style from './style.css';

export default class TodoListItem extends React.Component {
    constructor(props) {
        super(props);
    }

    static propTypes = {
        remove: React.PropTypes.func.isRequired,
        item: React.PropTypes.string.isRequired,
        index: React.PropTypes.number.isRequired
    };

    render() {
        const {remove, item, index} = this.props;

        return (
            <ListItem>
                <ListItemAction
                    onClick={remove.bind(null, index)}
                    className='remove-todo-item'
                >
                    <Icon
                        name='delete'
                    />
                </ListItemAction>
                <ListItemContent>
                    {item}
                </ListItemContent>
            </ListItem>
        );
    }
}
