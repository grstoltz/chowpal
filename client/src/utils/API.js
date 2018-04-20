import axios from "axios";

export default {
    // Gets all food
    getPantryItems: function (params) {
        return axios.get(`/api/food?id=${params.id}`);
    },
    // Gets all items
    getPendingItems: function (params) {
        return axios.get(`/api/item?id=${params.id}`);
    },
    getItem: function (id){
        return axios.get(`/api/item/${id}`);
    },
    deleteItem: function (params){
        return axios.delete(`/api/item?id=${params.id}`);
    },
    deleteFood: function (params){
        return axios.delete(`/api/food?id=${params.id}`);
    },
    postUPCImage: function (data, config) {
        return axios.post('/api/upc', data, config);
    },
    putUPCText: function (data){
        return axios.put('/api/item', data);
    },
    postReceiptImage: function (data){
        return axios.post('/api/aws', data)
    }
};