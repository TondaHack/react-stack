import cookie from 'js-cookie';
import { ACCESS_TOKEN } from '../../../config/config.json';
import { get, post } from '../lib/api';

export const SET_USER = 'SET_USER';

export function getUser(dispatch) {
  return get('/user/detail/2')
    .then((user) => {
      dispatch({
        type: SET_USER,
        user,
      });
      return user;
    });
}

export function login(dispatch, email, password) {
  return post('/authentication/login', {
    email,
    password,
  })
    .then(response => response.json())
    .then((json) => {
      const { access_token } = json;

      cookie.set(ACCESS_TOKEN, access_token);
      return json;
    })
    .then(() => getUser(dispatch));
}

export function registrate() {
  post('/authentication/register', {
    email: 'user@user.com',
    password: 'user',
  });
}
