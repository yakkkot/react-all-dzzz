import {axiosServices} from "./axios.services";

import {urls} from "./urls";

const todosServices = {
    getAll: () => axiosServices.get(urls.todos)
}

const usersServices = {
    getAll: () => axiosServices.get(urls.users),
    getOne: (id) => axiosServices.get(`${urls.users}/${id}`)
}

const albumsServices = {
    getAll: () => axiosServices.get(urls.albums)
}

const commentsServices = {
    getAll: () => axiosServices.get(urls.comments)
}

const postsServices = {
    getOne: (id) => axiosServices.get(`${urls.posts}/${id}`)
}

export {todosServices,albumsServices,commentsServices,postsServices,usersServices}