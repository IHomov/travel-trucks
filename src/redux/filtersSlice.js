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
    setForm(state, action) {
      state.form = state.form === action.payload ? '' : action.payload;
    },
    toggleFeature(state, action) {
      const feature = action.payload;
      if (state.features.includes(feature)) {
        state.features = state.features.filter(f => f !== feature);
      } else {
        state.features.push(feature);
      }
    },
    setFilters(state, action) {
      state.location = action.payload.location || '';
      state.form = action.payload.form || '';
      state.features = action.payload.features || [];
    },
    resetFilters(state) {
      state.location = '';
      state.form = '';
      state.features = [];
    }
  },
});

export const { setLocation, setForm, toggleFeature, resetFilters, setFilters } = filtersSlice.actions;
export default filtersSlice.reducer;