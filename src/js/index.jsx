import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import ListContainer from './components/ListContainer/index';
import {Provider} from 'react-redux';
import store from './stores';

const img = require('../img/avatar.jpg');

const Person = ({name, img}) => {
    return (
        <article>
            <h1>{name}</h1>
            <div>
                <img src={img}/>
            </div>
        </article>
    );
};

class EditName extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ''
        };
    }

    onChangeName = (event) => {
        this.setState({
            name: event.target.value
        });
    };

    changePersonName = () => {
        const {changeName} = this.props;
        const {name} = this.state;

        changeName(name);
        this.setState({
            name: ''
        });
    };

    render() {
        const {name} = this.state;
        const {changeName} = this.props;

        return (
            <div>
                <div>
                    Preview: {name}
                </div>
                <br/>
                <input
                    value={name}
                    onChange={this.onChangeName}
                />
                <button onClick={this.changePersonName}>Change name</button>
            </div>
        );
    }
}


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


// const App = () => {
//     return (
//         <div className='container'>
//             <div className='row'>
//                 <ListContainer />
//             </div>
//         </div>
//     );
// };

ReactDOM.render(
    <App />,
    document.getElementById('root')
);