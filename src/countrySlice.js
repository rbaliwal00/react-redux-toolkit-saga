import { createSlice } from "@reduxjs/toolkit";
 
export const countrySlice = createSlice({
    name: 'countries',
    initialState: {
        data: [],
        isLoading: false
    },
    reducers: {
        getCountryFetch: (state) => {
            state.isLoading = true;
        },
        getCountrySuccess: (state, action) => {
            state.data = action.payload;
            state.isLoading = false;
        },
        getCountryFailure: (state, action) => {
            state.isLoading = false;
        }
    }
})

export const {getCountryFetch, getCountrySuccess, getCountryFailure} = countrySlice.actions;

export default countrySlice.reducer;