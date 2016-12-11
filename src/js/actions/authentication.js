import fetch from 'isomorphic-fetch';
import cookie from 'js-cookie';
import { get } from '../lib/api';
// import constants from '../constants/appConstants';

export const SET_USER = 'SET_USER';

export function login(dispatch, email, password) {
  fetch('http://localhost:3600/authentication/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      password,
    }),
  }).then(response => response.json())
    .then((json) => {
      const { access_token } = json;

      cookie.set('access_token', access_token);
    }).then(() => {
      get('/user/detail/2').then((user) => {
        dispatch({
          type: SET_USER,
          user,
        });
      });
    });
}

export function registrate() {
  fetch('http://localhost:3600/authentication/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: 'user@user.com',
      password: 'user',
    }),
  });
}
