import axios from 'axios';

// src/api/index.js
export const fetchMainPageData = async () => {
    return axios.get('/mainPage');
};
