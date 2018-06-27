import axios from "axios";

const API = axios.create({
  baseURL: `http://localhost:3000/api/`,
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

export function del(url, resolve, reject) {
  return API.delete(url)
    .then((response) => {
      resolve(response);
    })
    .catch((error) => {
      reject(error);
    });
}
