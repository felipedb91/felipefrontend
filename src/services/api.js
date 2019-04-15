import axios from "axios";

const api  = axios.create({
    baseURL: 'https://felipebackend.herokuapp.com'
});

export default api;