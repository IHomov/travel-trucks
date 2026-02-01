import { createSlice } from "@reduxjs/toolkit";
import { fetchCampers } from "./campersOps";
import { fetchCamperById } from "./campersOps";

const campersSlice = createSlice({
  name: "campers",
  initialState: {
    items: [],
    page: 1,
    total: 0,
    isLoading: false,
    error: null,
    currentCamper: null,
  },
  reducers: {
    resetPage(state) {
      state.page = 1;
      state.items = [];
    },
    incrementPage(state) {
      state.page += 1;
    },
    resetItems: (state) => {
      state.items = [],
      state.page = 1;
    },
  },
  extraReducers: (builder) => {
    builder
      // Завантаження всіх кемперів
      .addCase(fetchCampers.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.isLoading = false;
        const newItems =
          action.payload.items ||
          (Array.isArray(action.payload) ? action.payload : []);
        // Створюємо карту існуючих ID для швидкої перевірки
        const existingIds = state.items.map((item) => item.id);

        // Фільтруємо нові елементи, залишаючи лише ті, яких ще немає в стейті
        const uniqueNewItems = newItems.filter(
          (item) => !existingIds.includes(item.id),
        );
        state.items = [...state.items, ...uniqueNewItems];
        if (action.payload.total) {
          state.total = action.payload.total;
        }
      })
      .addCase(fetchCampers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      // Завантаження одного кемпера за ID
      .addCase(fetchCamperById.pending, (state) => {
        state.isLoading = true;
        state.currentCamper = null;
      })
      .addCase(fetchCamperById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.currentCamper = action.payload;
      })
      .addCase(fetchCamperById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});
export const { resetPage, incrementPage, resetItems } = campersSlice.actions;
export default campersSlice.reducer;
