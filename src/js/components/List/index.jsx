import React, {PropTypes} from 'react';
import TodoListItem from '../TodoListItem/index.jsx';
import {Cell, List} from 'react-mdl';

export default class TodoList extends React.Component {
    constructor(props) {
        super(props);
    }

    static propTypes = {
        remove: PropTypes.func.isRequired
    };

    renderLiItem = (item, index) => {
        const {remove} = this.props;

        return (
            <TodoListItem remove={remove} item={item} key={index} index={index}/>
        );
    };

    render() {
        const {items} = this.props;
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
