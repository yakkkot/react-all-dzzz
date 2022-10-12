import {createSlice,createAsyncThunk,current} from "@reduxjs/toolkit";
import {userServices} from "../../services/user.services";

const initialState = {
    users: [],
    currentUser: null,
    userFromApi: null,
    userLogin: '',
    loading: false,
    error: null
}

export const setUser = createAsyncThunk(
    'userSlice/setUser',
    async (user,{rejectWithValue}) => {
        try {
            return user;
        }
        catch(e){
            return rejectWithValue(e.response.data);
        }
    }
);

export const getAll = createAsyncThunk(
    'userSlice/getAll',
    async (user,{rejectWithValue}) => {
        try {
            const {data} = await userServices.getAll();
            return data;
        }
        catch(e){
            return rejectWithValue(e.response.data);
        }
    }
);

const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {
        infoCurrentUser: (state, action) => {
            const x = state.users.find(value => value.id === action.payload);
            state.currentUser = x;
        },
        deleteUser: (state, action) => {
            const x = state.users.filter(value => value.id !== action.payload.id);
            state.users = x;
        },
        deleteById: (state, action) => {
            const index = state.users.findIndex(user => user.id === action.payload);
            state.users.splice(index, 1)
        },
    },
    extraReducers:{
        [setUser.fulfilled]:(state,action)=>{
            state.userLogin = action.payload;
        },
        [getAll.fulfilled]:(state,action)=>{
            state.users = action.payload
            state.loading = false;
        },
        [getAll.rejected]:(state,action)=>{
            state.error = action.payload;
            state.loading = false;
        },
        [getAll.pending]:(state,action)=>{
            state.loading = true;
        }
    }
})

export const {infoCurrentUser,deleteUser,deleteById} = userSlice.actions
export default userSlice.reducer
