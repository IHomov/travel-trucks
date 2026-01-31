import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io";

export const fetchCampers = createAsyncThunk(
  "campers/fetchCampers",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/campers");
      console.log("Response data:", response.data);
      return Array.isArray(response.data) ? response.data : response.data.items;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

// Операція для отримання одного кемпера за ID
export const fetchCamperById = createAsyncThunk(
  "campers/fetchById",
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(`/campers/${id}`);
      return response.data; // MockAPI поверне об'єкт однієї машини
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);