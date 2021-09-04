import { API } from '../api';

export const updateContact = (data, token) => {
  const url = `${API}/contact/update`;
  return fetch(url, {
    method: 'PUT',
    headers: {
      Accept: 'application/JSON',
      'Content-Type': 'application/JSON',
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const getContact = () => {
  const url = `${API}/contact/get`;
  return  fetch(url, {
    method: 'GET',
    headers: {
      Accept: 'application/JSON',
      'Content-Type': 'application/JSON',
    },
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};