import { createSlice } from "@reduxjs/toolkit";
import { fetchCart, addToCart, removeFromCart, updateCartQuantity } from "./cartThunk";
const cartSlice = createSlice({
    name: "cart",
    initialState: { carts: {}, status: "idle", error: null },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCart.fulfilled, (state, action) => {
                state.carts[action.payload.userId] = action.payload.cartItems || [];
            })
            .addCase(addToCart.fulfilled, (state, action) => {
                const { userId, item } = action.payload;
                if (!state.carts[userId]) state.carts[userId] = [];

                const existingItem = state.carts[userId].find((i) => i._id === item._id);
                if (existingItem) {
                    existingItem.quantity += 1;
                } else {
                    state.carts[userId].push(item); 
                }
            })
        
            .addCase(removeFromCart.fulfilled, (state, action) => {
                const { userId, productId } = action.payload;
                if (state.carts[userId]) {
                    state.carts[userId] = state.carts[userId].filter((item) => item._id !== productId);
                }
            })
         
            .addCase(updateCartQuantity.fulfilled, (state, action) => {
                const { userId, productId, change } = action.payload;
                if (state.carts[userId]) {
                    const item = state.carts[userId].find((item) => item._id === productId);
                    if (item) {
                        item.quantity = Math.max(1, item.quantity + change); // never below 1
                    }
                }
            });
    },
});

export default cartSlice.reducer;
