import {axiosServices} from "./axios.services";

import {urls} from "./urls";

const carServices = {
    getAll: () => axiosServices.get(urls.car),
    create: (car) => axiosServices.post(urls.car, car),
    getById: (id) => axiosServices.get(`${urls.car}/${id}`),
    updateById: (id,car) => axiosServices.put(`${urls.car}/${id}`,car),
    deleteById: (id) => axiosServices.delete(`${urls.car}/${id}`),
};

export {carServices}