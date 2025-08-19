import { createAsyncThunk } from "@reduxjs/toolkit";


export const fetchCart = createAsyncThunk("cart/fetchCart", async (userId) => {
    const response = await fetch(`https://backend-chi-sepia.vercel.app/api/cart?userId=${userId}`);
    const data = await response.json();
    return { userId, cartItems: data.carts[userId] || [] };
});

export const addToCart = createAsyncThunk("cart/addToCart", async ({ userId, item }) => {
    const response = await fetch("https://backend-chi-sepia.vercel.app/api/cart", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId, product: item }),
    });
    const data = await response.json();

    if (!data.item) {
        throw new Error(data.message || "Failed to add to cart");
    }

    return { userId, item: data.item };
});

export const removeFromCart = createAsyncThunk("cart/removeFromCart", async ({ userId, productId }) => {
    await fetch("https://backend-chi-sepia.vercel.app/api/cart", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId, productId }),
    });
    return { userId, productId };
});

export const updateCartQuantity = createAsyncThunk(
    "cart/updateCartQuantity",
    async ({ userId, productId, change }) => {
        await fetch(`https://backend-chi-sepia.vercel.app/api/cart`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ userId, productId, change }),
        });
        return { userId, productId, change };
    }
);
