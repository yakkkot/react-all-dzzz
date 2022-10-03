import axios from "axios";

import {baseURL} from "./urls";
import {authServices} from "./auth.services";
import {createBrowserHistory} from "history";

const axiosServices = axios.create({baseURL})
let isRefreshing = false

const history = createBrowserHistory();

axiosServices.interceptors.request.use((config)=>{
    const access = authServices.getAccessToken()

    if(access){
        config.headers.Authorization = `Bearer ${access}`
    }
    return config;
})

axiosServices.interceptors.response.use((config)=>{
    return config
}, async(error)=>{
    const refresh = authServices.getRefreshToken()
    if (error.response?.status===401 && refresh && !isRefreshing) {
        isRefreshing = true;
        try{
           const {data} = await authServices.refresh(refresh);
            authServices.setTokens(data);
        }
        catch (e){
            authServices.deleteTokens();
            history.replace('/login?expSession=true')
        }
        isRefreshing = false;
        return axiosServices(error.config)
    }
    return Promise.reject(error)
})

export {
    axiosServices,
    history
}