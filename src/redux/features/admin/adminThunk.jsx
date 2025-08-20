
import { createAsyncThunk } from "@reduxjs/toolkit";

const API_BASE = "https://backend-chi-sepia.vercel.app/api";


export const fetchAdminData = createAsyncThunk(
    "admin/fetchAll",
    async (_, { rejectWithValue }) => {
        try {
            const res = await fetch(`${API_BASE}/products`);
            const data = await res.json();

            const productsMapped = data.products.map((p) => ({
                ...p,
                id: p._id,
                _id: p._id,
                categoryId: p.categoryId.toString(),
            }));

            const categoriesMapped = data.categories.map((c) => ({
                ...c,
                id: c.id.toString(),
            }));

            return { products: productsMapped, categories: categoriesMapped };
        } catch (err) {
            return rejectWithValue(err.message);
        }
    }
);

export const saveAdminProduct = createAsyncThunk(
    "admin/saveProduct",
    async ({ formData, editProductId }, { rejectWithValue }) => {
        const fd = new FormData();
        fd.append("name", formData.name);
        fd.append("price", formData.price);
        fd.append("categoryId", String(formData.categoryId));
        if (formData.image) fd.append("image", formData.image);

        const url = editProductId
            ? `${API_BASE}/products/${editProductId}`
            : `${API_BASE}/products`;
        const method = editProductId ? "PUT" : "POST";

        try {
            const res = await fetch(url, { method, body: fd });
            const result = await res.json();

            if (!res.ok) return rejectWithValue(result);

            return {
                product: {
                    ...result.product,
                    _id: String(result.product._id),
                    id: String(result.product._id),
                },
                isEdit: !!editProductId,
            };
        } catch (err) {
            return rejectWithValue(err.message);
        }
    }
);

export const deleteAdminProduct = createAsyncThunk(
    "admin/deleteProduct",
    async (mongoId, { rejectWithValue }) => {
        try {
            const res = await fetch(`${API_BASE}/products/${mongoId}`, {
                method: "DELETE",
            });
            const result = await res.json();

            if (!res.ok) return rejectWithValue(result);
            return mongoId;
        } catch (err) {
            return rejectWithValue(err.message);
        }
    }
);



export const fetchAdminOrders = createAsyncThunk(
    "admin/fetchOrders",
    async (_, { rejectWithValue }) => {
        try {
            const res = await fetch(`${API_BASE}/orders`, {
                method: "GET",
                headers: { "Content-Type": "application/json" },
            });

            if (!res.ok) throw new Error("Failed to fetch orders");
            const data = await res.json();
            return data;
        } catch (err) {
            return rejectWithValue(err.message);
        }
    }
);
export const toggleHighlight = createAsyncThunk(
    "admin/toggleHighlight",
    async ({ _id, highlight }, { rejectWithValue }) => {
        try {
            const res = await fetch(`${API_BASE}/products/${_id}/highlight`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ highlight }),
            });

            if (!res.ok) throw new Error("Failed to toggle highlight");

            const data = await res.json(); // get updated product from API
            return data; // return full product object (including updated highlight)
        } catch (err) {
            return rejectWithValue(err.message);
        }
    }
);
