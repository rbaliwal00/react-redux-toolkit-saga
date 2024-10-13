import { createSlice } from "@reduxjs/toolkit";
 
export const catSlice = createSlice({
    name: 'cats',
    initialState: {
        data: [],
        isLoading: false
    },
    reducers: {
        getCatsFetch: (state) => {
            state.isLoading = true;
        },
        getCatsSuccess: (state, action) => {
            state.data = action.payload;
            state.isLoading = false;
        },
        getCatsFailure: (state, action) => {
            state.isLoading = false;
        }
    }
})

export const {getCatsFetch, getCatsSuccess, getCatsFailure} = catSlice.actions;

export default catSlice.reducer;