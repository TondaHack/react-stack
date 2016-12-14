import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material';
import { Router, Route, browserHistory } from 'react-router';
import cookie from 'js-cookie';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import config from '../../config/config.json';
import ListContainer from './components/TodoListContainer/index';
import store from './stores';
import { getUser } from './actions/authentication';
import { todoAll } from './actions/todo';
import './index.css';
import Login from './components/Authentication/Login';

const App = () => (
  <div className="main">
    <h3> Todo List </h3>
    <ListContainer />
  </div>
);

if (cookie.get(config.ACCESS_TOKEN)) {
  getUser(store.dispatch);
  todoAll(store.dispatch);
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App} />
      <Route path="/login" component={Login} />
    </Router>
  </Provider>,
  window.document.getElementById('root')
);
