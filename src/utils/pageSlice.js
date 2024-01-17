import { createSlice } from "@reduxjs/toolkit";

const pageSlice = createSlice({
    name: "page",
    initialState: {
        page: 1,
    },
    reducers: {
        nextPage: (state) => {
            state.page = state.page + 1;
        }
    },
});

export const {nextPage} = pageSlice.actions;

export default pageSlice.reducer;