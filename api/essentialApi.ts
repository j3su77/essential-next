
import axios from 'axios';



const essentialApi = axios.create({
    baseURL: process.env.API_URL
});


export default essentialApi;