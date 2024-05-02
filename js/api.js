import { openErrorMessage, setErrorServerMessage } from './messages.js';

const BASE_URL = 'https://28.javascript.htmlacademy.pro/kekstagram';

const Route = {
  GET_DATA: '/data',
  SEND_DATA: '/',
};

const Method = {
  GET: 'GET',
  POST: 'POST',
};

const load = (route, showMessage, method = Method.GET, body = null) =>
  fetch(`${BASE_URL}${route}`, {method, body})
    .then((response) => {
      if (!response.ok) {
        throw new Error();
      }
      return response.json();
    })
    .catch(() => {
      throw new Error(showMessage());
    });

const getData = () => load(Route.GET_DATA, setErrorServerMessage);
const sendData = (body) => load(Route.SEND_DATA, openErrorMessage, Method.POST, body);

// const getData = () => fetch(`${BASE_URL}${Route.GET_DATA}`)
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error();
//     }
//     return response.json();
//   })
//   .catch(() => {
//     throw new Error(setErrorServerMessage());
//   });

// const sendData = (body) => fetch(
//   `${BASE_URL}${Route.SEND_DATA}`,
//   {
//     method: 'POST',
//     body,
//   })
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error();
//     }
//   })
//   .catch(() => {
//     throw new Error(openErrorMessage());
//   });

export { getData, sendData };
