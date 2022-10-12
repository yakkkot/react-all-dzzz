import {createSlice,createAsyncThunk,current} from "@reduxjs/toolkit";
import {carServices} from "../../services/car.services";


const initialState = {
    cars: [],
    currentCar: null,
    updateCar: null,
    loading: false,
    error: null,
}

export const getAllCars = createAsyncThunk(
    'carsSlice/getAllCars',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await carServices.getAll();
            return data;
        }
       catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);

export const deleteCar = createAsyncThunk(
    'carsSlice/deleteCar',
    async (id, {rejectWithValue}) => {
        try {
            // const {data} = await carServices.deleteById(id);
            await carServices.deleteById(id);
            return id;
            // return data;
        }
        catch (e){
            return rejectWithValue(e.response.data)
        }
    }
);

export const addCar = createAsyncThunk(
    'carsSlice/addCar',
    async (car, {rejectWithValue}) => {
        try {
            const {data} = await carServices.create(car)
            return data;
        }
        catch (e){
            return rejectWithValue(e.response.data)
        }
    }
);

export const updateCarToServer = createAsyncThunk(
    'carsSlice/updateCarToServer',
    async ([id,car], {rejectWithValue}) => {
        try {
            const {data} = await carServices.updateById(id, car);
            return data
        }
        catch (e){
            return rejectWithValue(e.response.data)
        }
    }
);

const carsSlice = createSlice({
    name: 'carsSlice',
    initialState,
    reducers:{
        updateCar:(state,action)=>{
            const find = state.cars.find(value => value.id === action.payload);
            state.updateCar = find;
        }
    },
    extraReducers:{
        [getAllCars.fulfilled]: (state, action) => {
            state.cars = action.payload;
            state.loading = false
        },
        [getAllCars.pending]: (state, action) => {
            state.loading = true
        },
        [getAllCars.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload;
        },
        [deleteCar.fulfilled]: (state, action) => {
            const findCar = state.cars.filter(value => value.id !== action.payload);
            state.cars = findCar;
        },
        [addCar.fulfilled]: (state, action) => {
            state.cars.push(action.payload)
        },
        [updateCarToServer.fulfilled]: (state, action) => {
            const find = state?.cars?.find(value => value.id === action.payload.id);
            Object.assign(find, action.payload)
            state.updateCar = null;
        }
    }
})


export const {updateCar} = carsSlice.actions

export default carsSlice.reducer