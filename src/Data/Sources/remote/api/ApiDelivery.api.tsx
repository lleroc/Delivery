import axios from "axios";
const ApiDelivery = axios.create({
    baseURL:'http://192.168.3.215:3001/api',
    headers:{
        'Content-Type':'application/json'
    }
});

export { ApiDelivery }