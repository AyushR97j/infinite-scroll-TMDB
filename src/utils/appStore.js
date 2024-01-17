import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./movieSlice";
import pageReducer from "./pageSlice";

const appStore = configureStore( {
    reducer: {
        movies: movieReducer,
        page: pageReducer
    },
});

export default appStore;