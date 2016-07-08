import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Person from './Person.jsx';
import EditName from './EditName.jsx';
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
                <Person name={name} img={img}/>
                <EditName name={name} changeName={this.changeName}/>
            </main>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);