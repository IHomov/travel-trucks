import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    location: '',
    form: '',
    features: [],
  },
  reducers: {
    setLocation(state, action) {
      state.location = action.payload;
    },
  },
});

export const { setLocation } = filtersSlice.actions;
export default filtersSlice.reducer;