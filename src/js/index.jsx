import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import ListContainer from './components/TodoListContainer/index';
import store from './stores';
import './index.css';

const App = () => (
  <div className="main">
    <h3> Todo List</h3>
    <ListContainer />
  </div>
);

const renderApp = () => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    window.document.getElementById('root')
  );
};

if (module && module.hot && module.hot.accept) {
  module.hot.accept(App, renderApp);
}

renderApp();
