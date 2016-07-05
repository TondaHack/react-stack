import React, {PropTypes} from 'react';
import style from './style.scss';
import ListItem from './../ListItem/index.jsx';

export default class List extends React.Component {
    constructor(props) {
        super(props);
    }

    static propTypes = {
        remove: PropTypes.func.isRequired
    };

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
        );
    }
}
