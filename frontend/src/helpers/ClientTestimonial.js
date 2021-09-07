import { API } from '../api';

export const updateTestimonial = (data, token) => {
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


  export const getTestimonial = () => {
    const url = `${API}/eom/get`;
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