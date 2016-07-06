import React from 'react';
import ReactDOM from 'react-dom';
import ListContainer from './components/ListContainer/index';
import {Provider} from 'react-redux';
import store from './stores';

const App = () => {
    return (
        <div className='container'>
            <div className='row'>
                <ListContainer />
            </div>
        </div>
    );
};

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);