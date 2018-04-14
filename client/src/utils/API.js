import axios from "axios";

export default {
    // Gets all food
    getFood: function () {
        return axios.get('/api/food');
    },
    // Gets all items
    getItem: function () {
        return axios.get('/api/item');
    }
  
};