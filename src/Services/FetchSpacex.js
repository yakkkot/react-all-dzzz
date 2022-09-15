import axios from "axios";

let axiosInstance = axios.create({
    baseURL: 'https://api.spacexdata.com/v3/launches/',
    headers: {}
});

const getSpace = ()=>{
    return axiosInstance.get('');
}


export {getSpace}