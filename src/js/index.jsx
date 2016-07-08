import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Person from './Person.jsx';
import EditName from './EditName.jsx';
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
            <div>
                <Person name={name} img={img}/>
                <EditName name={name} changeName={this.changeName}/>
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);