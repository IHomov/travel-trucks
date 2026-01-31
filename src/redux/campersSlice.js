import { createSlice } from '@reduxjs/toolkit';
import { fetchCampers } from './campersOps';
import { fetchCamperById } from './campersOps';

const campersSlice = createSlice({
  name: 'campers',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
    currentCamper: null,
  },
  reducers: {}, 
  extraReducers: (builder) => {
    builder
      // Завантаження всіх кемперів
      .addCase(fetchCampers.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload; 
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
      }); // Ось тут ми закрили builder
  } // Ось тут ми закрили extraReducers
});

export default campersSlice.reducer;