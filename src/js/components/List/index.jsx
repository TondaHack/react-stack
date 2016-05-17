import React from 'react';
import style from './style.scss';

class List extends React.Component {
    constructor(props) {
        super(props);
    }

    renderLiItem = (item, index) => {
        const {remove} = this.props;

        return (
            <li key={index} className='list-group-item'>
                <span
                    className='glyphicon glyphicon-remove remove-item'
                    onClick={remove.bind(null, index)}>
                </span>
                <span className='todo-item'>
                    {item}
                </span>
            </li>
        );
    };

    render() {
        const {items} = this.props;
        const listItems = items.map(this.renderLiItem);

        return (
            <ul className='ul-list-items'>
                {listItems}
            </ul>
        )
    }
}


module.exports = List;
