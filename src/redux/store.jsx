import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/auth/authSlice";
import cartReducer from "./features/cart/cartSlice";
import productsReducer from "./features/products/productSlice";
import orderReducer from "./features/orders/orderSlice";
import adminReducer from "./features/admin/adminSlice";
const store = configureStore({
    reducer: {
        auth: authReducer,
        cart: cartReducer,
        products: productsReducer,
        admin: adminReducer,
        orders: orderReducer,
    }
})
export default store;