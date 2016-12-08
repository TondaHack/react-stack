import fetch from 'isomorphic-fetch';
import cookie from 'js-cookie';

const accessToken = 'access-token';

function getHeaders() {
  return {
    'Content-Type': 'application/json',
    [accessToken]: cookie.get('access_token'),
  };
}

export function fetchData(url, type = 'GET', body) {
  return fetch(url, {
    method: type,
    headers: getHeaders(),
    body: body ? JSON.stringify(body) : undefined,
  });
}

const baseUrl = 'http://localhost:3600';

export function get(path) {
  const url = `${baseUrl}${path}`;

  return fetchData(url).then(json => json());
}

export function post(path, body = {}) {
  const url = `${baseUrl}${path}`;

  return fetchData(url, 'POST', body);
}

export function put() {
}

// export function delete() {
// }
