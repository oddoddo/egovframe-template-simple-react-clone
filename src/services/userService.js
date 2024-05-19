// src/services/userService.js
import axios from 'axios';

export const fetchUser = async () => {
    return await axios.get('/api/user');
};
