import { createAsyncThunk } from "@reduxjs/toolkit";

export const createOrder = createAsyncThunk(
    "orders/createOrder",
    async (order, { rejectWithValue }) => {
        try {
            const response = await fetch("https://backend-chi-sepia.vercel.app/api/order", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(order),
            });
            const data = await response.json();
            if (!response.ok) throw new Error(data.message || "فشل إنشاء الطلب");
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const fetchOrders = createAsyncThunk(
    "orders/fetchOrders",
    async (userId, { rejectWithValue }) => {
        try {
            const res = await fetch("https://backend-chi-sepia.vercel.app/api/order");

            if (!res.ok) {
                throw new Error("Network response was not ok");
            }

            const data = await res.json();

            const userOrders = data.orders.filter(order => order.userId === userId).reverse();

            return userOrders;
        } catch (err) {
            return rejectWithValue(err.message);
        }
    }
);