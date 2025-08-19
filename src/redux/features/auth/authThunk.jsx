import { createAsyncThunk } from "@reduxjs/toolkit";

export const loginUser = createAsyncThunk(
    "auth/loginUser",
    async (credentials, thunkAPI) => {
        try {
            const response = await fetch("https://backend-chi-sepia.vercel.app/api/users", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(credentials),
            });

            if (!response.ok) {
                throw new Error("Invalid credentials");
            }
            const user = await response.json();
            return user;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

// Signup user
export const signupUser = createAsyncThunk(
    "auth/signupUser",
    async (credentials, thunkAPI) => {
        try {
            const response = await fetch("https://backend-chi-sepia.vercel.app/api/signup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(credentials),
            });

            if (!response.ok) {
                throw new Error("Signup failed");
            }
            const user = await response.json();
            return user;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);
