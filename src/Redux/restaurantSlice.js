import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//For calling APs in redux/slice we use Thunk
//Thunk is a method provided by redux to make api calls
//API CALLS are asynchronous function,so thunk make use of,concept of Promise

//function to call API

export const fetchRestaurant = createAsyncThunk('restaurantList/fetchRestaurant', () => {
    const result = axios.get('/restaurant.json').then(response => response.data)
    // console.log("result in slice", result);
    return result;

});

const restaurantSlice = createSlice({
    name: "restaurantList",
    initialState: {
        loading: false, //pending
        allRestuarant: [], //resolve
        error: " ", //reject
        searchRestaurant: [],
    },
    extraReducers: (builder) => {
        builder.addCase(fetchRestaurant.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(fetchRestaurant.fulfilled, (state, action) => {
            state.loading = false;
            state.allRestuarant = action.payload
            state.searchRestaurant = action.payload
            state.error = ""
        })
        builder.addCase(fetchRestaurant.rejected, (state, action) => {
            state.loading = false;
            state.allRestuarant = [];
            state.error = action.error.message
        })
    },
    reducers: {
        search: (state, action) => {
            state.allRestuarant.restaurants =
                state.searchRestaurant.restaurants.filter(item => item.neighborhood.toLowerCase().includes(action.payload))
        }
    }
})

export default restaurantSlice.reducer;
export const { search } = restaurantSlice.actions