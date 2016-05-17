import React from 'react';
import ReactDOM from 'react-dom';
import ListContainer from './components/ListContainer/index';

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
    <App />, document.getElementById('root')
);