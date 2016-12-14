import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material';
import { Router, Route, browserHistory, RouterContext } from 'react-router';
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

const logOut = () => {
  cookie.remove(config.ACCESS_TOKEN);
  if (window) {
    window.location.reload();
  }
};

const App = () => (
  <div className="main">
    <h3> Todo List </h3>
    <button onClick={logOut}>Log Out</button>
    <ListContainer />
  </div>
);

const checkUser = (nextState, replace, callback) => {
  getUser(store.dispatch)
    .then(() => {
      todoAll(store.dispatch);
      callback();
    });
};

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} render={props => <RouterContext {...props} />}>
      <Route path="/" component={App} onEnter={checkUser} />
      <Route path="/login" component={Login} />
    </Router>
  </Provider>,
  window.document.getElementById('root')
);
