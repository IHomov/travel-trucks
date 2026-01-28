import { createSlice } from '@reduxjs/toolkit';

const campersSlice = createSlice({
  name: 'campers',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  reducers: {}, 
});

export default campersSlice.reducer;