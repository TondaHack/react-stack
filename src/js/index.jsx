import React from 'react';
import ReactDOM from 'react-dom';
import ListContainer from './components/TodoListContainer/index';
import {Provider} from 'react-redux';
import store from './stores';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import './index.css';

const App = () => {
    return (
        <div className='main' >
            <h3 className='text-center'> Todo List </h3>
            <ListContainer />
        </div>
    );
};

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);