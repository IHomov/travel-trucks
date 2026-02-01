import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io";

export const fetchCampers = createAsyncThunk(
  "campers/fetchAll",
  async ({ page = 1, limit = 4, ...filtersArg }, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const filters =
        Object.keys(filtersArg).length > 0 ? filtersArg : state.filters;
      const { location, form, features } = filters;

      const params = new URLSearchParams();
      params.append("page", page);
      params.append("limit", limit);

      if (location) {
        params.append("location", location);
      }

      if (form) {
        params.append("form", form);
      }

      if (features && features.length > 0) {
        features.forEach((feature) => {
          if (feature === "automatic") {
            params.append("transmission", "automatic");
          } else if (feature === "TV" || feature === "AC") {
            params.append(feature, 1);
          } else {
            params.append(feature.toLowerCase(), true);
          }
        });
      }

      const response = await axios.get("/campers", { params });

      console.log("Завантажені дані:", response.data);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const fetchCamperById = createAsyncThunk(
  "campers/fetchById",
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(`/campers/${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
