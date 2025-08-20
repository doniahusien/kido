import { createSlice } from "@reduxjs/toolkit";
import { fetchAdminOrders, fetchAdminData, saveAdminProduct, deleteAdminProduct, toggleHighlight } from "./adminThunk";
const adminSlice = createSlice({
    name: "admin",
    initialState: {
        products: [],
        orders: [],
        ordersStatus: "idle",
        ordersError: null,
        categories: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchAdminData.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(fetchAdminData.fulfilled, (state, action) => {
            state.loading = false;
            state.products = action.payload.products;
            state.categories = action.payload.categories;
        });
        builder.addCase(fetchAdminData.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });

        builder.addCase(saveAdminProduct.fulfilled, (state, action) => {
            const { product, isEdit } = action.payload;
            if (isEdit) {
                state.products = state.products.map((p) =>
                    String(p._id) === String(product._id) ? product : p
                );
            } else {
                state.products.push(product);
            }
        });

        builder.addCase(deleteAdminProduct.fulfilled, (state, action) => {
            state.products = state.products.filter((p) => p._id !== action.payload);
        }).addCase(fetchAdminOrders.pending, (state) => {
            state.ordersStatus = "loading";
        })
            .addCase(fetchAdminOrders.fulfilled, (state, action) => {
                state.ordersStatus = "succeeded";
                state.orders = action.payload;
            })
            .addCase(fetchAdminOrders.rejected, (state, action) => {
                state.ordersStatus = "failed";
                state.ordersError = action.payload;
            })
            .addCase(toggleHighlight.fulfilled, (state, action) => {
                const updated = action.payload;
                const index = state.products.findIndex(p => p._id === updated._id);
                if (index !== -1) {
                    state.products[index] = updated; 
                }
            });
    }
})

export default adminSlice.reducer;
