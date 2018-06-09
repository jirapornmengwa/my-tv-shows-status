import Axios from 'axios';

const baseUrl = 'http://localhost:3000/api';

const API = Axios.create({
  baseURL: `http://localhost:3000/api`,
  withCredentials: false,
  headers: {}
});

export function get(url, resolve, reject) {
  return API.get(url)
    .then((response) => {
      resolve(response);
    })
    .catch((error) => {
      reject(error);
    });
}

export function post(url, data, resolve, reject) {
  return API.post(url, data)
    .then((response) => {
      resolve(response);
    })
    .catch((error) => {
      reject(error);
    });
}
