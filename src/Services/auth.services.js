import {urls} from "./urls";
import {axiosServices} from "./axiox.services";

const _accessToken = 'access';
const _refreshToken = 'refresh';


const authServices = {
    register: (user) => axiosServices.post(urls.users, user),
    login: (user) => axiosServices.post(urls.auth.login, user),
    refresh: (refresh) => axiosServices.post(urls.auth.refresh, {refresh}),

    setTokens: ({access, refresh}) => {
        localStorage.setItem(_accessToken, access);
        localStorage.setItem(_refreshToken, refresh);
    },

    getAccessToken: () => localStorage.getItem(_accessToken),
    getRefreshToken: () => localStorage.getItem(_refreshToken),

    deleteTokens:()=>{
        localStorage.removeItem(_accessToken);
        localStorage.removeItem(_refreshToken);

    }
};

const carsServices = {
    getAll: (page=1) => axiosServices.get(urls.cars,{params:{page}}),
    create: (car) => axiosServices.put(urls.cars, car),
    addPhotoById: (id, data) => axiosServices.patch(`${urls.cars}/${id}`, data)

}

export {authServices,carsServices}