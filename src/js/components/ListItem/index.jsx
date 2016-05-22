import React from 'react';
import style from './style.scss';

export default class ListItem extends React.Component {
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
            <li className='list-group-item'>
                <span
                    className='glyphicon glyphicon-remove remove-item'
                    onClick={remove.bind(null, index)}>
                </span>
                <span className='todo-item'>
                    {item}
                </span>
            </li>
        );
    }
}
