import axios from "axios";

export default {
    // Gets all food
    getPantryItems: function () {
        return axios.get('/api/food');
    },
    // Gets all items
    getItems: function () {
        return axios.get('/api/item');
    }
  
};