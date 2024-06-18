import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../services/apiService";

export const fetchProductList = createAsyncThunk(
    "productList/fetchList",
    async (_, thunkAPI) => {
        try {
            const response = await api("/products")
            return response.data
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)