import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk("products/fetchProducts", async () => {
    const response = await fetch("https://backend-chi-sepia.vercel.app/api/products");
    const data = await response.json();
    return data.products; 
});
