import axios from "axios";

const api = axios.create({
    baseURL:'https://plistwebapp-backend.onrender.com'
})

export default api;