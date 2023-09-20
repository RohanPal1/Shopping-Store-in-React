import { configureStore } from "@reduxjs/toolkit";
import productReducer from  "./Slices/productSlice";
import cartReducer from  "./Slices/cartSlice";


export default configureStore({
    reducer: {
        productReducer,
        cartReducer
    }
})
