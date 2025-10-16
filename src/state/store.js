import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counterSlice.js";
import productsReducer from "../features/apiCard.js";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        products: productsReducer,
    },
});
