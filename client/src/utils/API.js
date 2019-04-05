import axios from 'axios';

export default {
    findAll: function() {
        return axios.get('/api/items');
    },
    findCategories: function() {
        return axios.get('/api/categories');
    },
}