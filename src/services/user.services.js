import {axiosService} from "./axios.services";
import {urls} from "../configs/urls";

const userServices = {
    getAll:()=>axiosService.get(urls.users),
    postsAll: () => axiosService.get(urls.posts),
    onePost: (id) => axiosService.get(urls.posts+'/'+id)
};


export {userServices}

