import {axiosServices} from "./axios.services";

import {urls} from "./urls";

const userServices = {
    getAll: () => axiosServices.get(urls.users),
    create: (user) => axiosServices.post(urls.users, user),
    getById: (id) => axiosServices.get(`${urls.users}/${id}`),
    updateById: (id,user) => axiosServices.put(`${urls.users}/${id}`,user),
    deleteById: (id) => axiosServices.delete(`${urls.users}/${id}`),
};

const commentServices = {
    getAll: () => axiosServices.get(urls.comments),
    create: (comment) => axiosServices.post(urls.comments, comment),
    getById: (id) => axiosServices.get(`${urls.comments}/${id}`),
    updateById: (id,comment) => axiosServices.put(`${urls.comments}/${id}`,comment),
    deleteById: (id) => axiosServices.delete(`${urls.comments}/${id}`),
};

export {userServices,commentServices}