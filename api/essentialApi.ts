
import axios from 'axios';



const essentialApi = axios.create({
    baseURL: 'http://localhost:8080/api'
});


export default essentialApi;