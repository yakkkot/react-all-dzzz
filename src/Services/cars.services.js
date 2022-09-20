import {axiosServices} from "./axios.services";

import {urls} from "./urls";

const carServices = {
    getAll: () => axiosServices.get(urls.car),
    create: (car) => axiosServices.put(urls.car, car),
    getById: (id) => axiosServices.get(`${urls.car}/${id}`),
    updateById: (id) => axiosServices.put(`${urls.car}/${id}`),
    deleteById: (id) => axiosServices.delete(`${urls.car}/${id}`),
};

export {carServices}