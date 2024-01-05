import axios from 'axios';

export const BASE_URL = 'https://bookread-backend.goit.global/';

const get = endpoint =>
  axios.get(`${BASE_URL}${endpoint}`).then(response => response.data);

const post = (endpoint, data) =>
  axios.post(`${BASE_URL}${endpoint}`, data).then(response => response.data);

const patch = (endpoint, data) =>
  axios.patch(`${BASE_URL}${endpoint}`, data).then(response => response.data);

const del = endpoint =>
  axios.delete(`${BASE_URL}${endpoint}`).then(response => response.data);

export { get, post, patch, del };
