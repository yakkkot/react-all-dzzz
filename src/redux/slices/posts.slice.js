import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {userServices} from "../../services/user.services";


const initialState = {
    posts: [],
    currentPost: null,
    loading: false,
    error:null
};

export const getAll = createAsyncThunk(
    'postsSlice/getAll',
    async (_, {rejectWithValue, dispatch}) => {
        try {
            const {data} = await userServices.postsAll();
            return data;
        }
        catch(e){
            return rejectWithValue(e.response.data);
        }
    }
);

export const onePost = createAsyncThunk(
    'postsSlice/onePost',
    async ({id}, {rejectWithValue}) => {
        try {
            const {data} = await userServices.onePost(id);
            return data;
        }
        catch(e){
            return rejectWithValue(e.response.data);
        }
    }
);

const postsSlice = createSlice({
    name: 'postsSlice',
    initialState,
    reducers: {},

    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.posts = action.payload;
                state.loading = false;
            })
            .addCase(getAll.rejected, (state, action) => {
                state.error = action.payload;
                state.loading = false;
            })
            .addCase(getAll.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(onePost.fulfilled, (state, action) => {
                state.currentPost = action.payload
            })
})


export default postsSlice.reducer

