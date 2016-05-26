import React from 'react';
import ReactDOM from 'react-dom';
import ListContainer from './components/ListContainer/index';

import { Provider } from 'react-redux'
import store from './stores'
class App extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <ListContainer />
                </div>
            </div>
        )
    }
}


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);