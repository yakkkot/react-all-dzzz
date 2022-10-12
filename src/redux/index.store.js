import {configureStore, combineReducers} from "@reduxjs/toolkit";

import userRecuder from "../redux/slices/user.slice";
import postsReducer from "../redux/slices/posts.slice"
import carsReducer from "./slices/car.slice"


const store = configureStore({
    reducer:{
        users: userRecuder,
        posts: postsReducer,
        cars: carsReducer,
    }
})

export {store}

