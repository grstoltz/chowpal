import axios from 'axios';

export default {
  // Gets all food
  getPantryItems(params) {
    return axios.get(`/api/food?id=${params.id}`);
  },
  // Gets all items
  getPendingItems(params) {
    return axios.get(`/api/item?id=${params.id}`);
  },
  getItem(id) {
    return axios.get(`/api/item/${id}`);
  },
  deleteItem(params) {
    return axios.delete(`/api/item?id=${params.id}`);
  },
  deleteFood(params) {
    return axios.delete(`/api/food?id=${params.id}`);
  },
  postUPCImage(data, config) {
    return axios.post('/api/upc', data, config);
  },
  putUPCText(data) {
    return axios.put('/api/item', data);
  },
  postReceiptImage(data) {
    return axios.post('/api/aws', data);
  },
  getUserData() {
    return axios.get('/api/user');
  },
};
