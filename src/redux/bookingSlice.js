import { createSlice } from '@reduxjs/toolkit';

export const bookingSlice = createSlice({
  name: 'booking',
  initialState: {
    detailsData: {},
    personalData: {},
  },
  reducers: {
    setCaonesData: (state, action) => {
      state.detailsData = action.payload;
    },
    setPersonalData: (state, action) => {
      state.personalData = action.payload;
    },
  },
});

export const { setCaonesData, setPersonalData } = bookingSlice.actions;
export default bookingSlice.reducer;
