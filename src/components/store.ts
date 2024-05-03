import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "./ResponsiveMenu/menuSlice"
import producReducer from "./featuredProduct/productSlice"

const store = configureStore({
    reducer:{
        menu: menuReducer,
        product: producReducer
    }
})


export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppSispatch = typeof store.dispatch;