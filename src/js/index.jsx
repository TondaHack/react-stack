import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import User from './User.jsx';
import EditUserName from './EditName.jsx';
import style from './index.scss';
const img = require('../img/avatar.jpg');

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: 'Darth Vader',
            img
        };
    }

    changeName = (name = '') => {
        this.setState({
            name
        });
    };


    render() {
        const {img, name} = this.state;

        return (
            <main className='user-section'>
                <User name={name} img={img}/>
                <EditUserName name={name} changeName={this.changeName}/>
            </main>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);