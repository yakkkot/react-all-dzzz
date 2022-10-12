import axios from "axios";

const baseURL = 'http://owu.linkpc.net/api/v2';
const urls = {
    car: '/cars',
}
const axiosServicesCars = axios.create({baseURL});

const carServices = {
    getAll: () => axiosServicesCars.get(urls.car),
    create: (car) => axiosServicesCars.post(urls.car, car),
    getById: (id) => axiosServicesCars.get(`${urls.car}/${id}`),
    updateById: (id,car) => axiosServicesCars.put(`${urls.car}/${id}`,car),
    deleteById: (id) => axiosServicesCars.delete(`${urls.car}/${id}`),
};

export {carServices};