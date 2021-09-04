import { API } from '../api';

export const subscriber = (data) => {
  const url = `${API}/subscription/save`;
  return fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/JSON',
      'Content-Type': 'application/JSON',
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};