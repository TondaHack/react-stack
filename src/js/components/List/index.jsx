import React from 'react';
import style from './style.scss';
import ListItem from './../ListItem/index.jsx'

export default class List extends React.Component {
    constructor(props) {
        super(props);
    }

    renderLiItem = (item, index) => {
        const {remove} = this.props;

        return (
            <ListItem remove={remove} item={item} key={index} index={index} />
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
