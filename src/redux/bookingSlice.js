import { createSlice } from '@reduxjs/toolkit';
import { addDays, format } from 'date-fns';

export const bookingSlice = createSlice({
  name: 'booking',
  initialState: {
    date: format(addDays(new Date(), 1), 'yyyy-MM-dd'),
    time: '6:30',
    canoes: [1],
    totalPrice: 30,
    personalData: {
      firstName: null,
      secondName: null,
      email: null,
      phone: null,
    },
  },
  reducers: {
    setBookingDate: (state, action) => {
      state.date = action.payload;
    },
    setBookingTime: (state, action) => {
      state.time = action.payload;
    },
    setCanoes: (state, action) => {
      state.canoes = action.payload;
      state.totalPrice = state.canoes.reduce((prevValue, currValue) => {
        const price = currValue === 1 ? 30 : 40;
        return prevValue + price;
      }, 0);
    },
    setPersonalData: (state, action) => {
      state.personalData = action.payload;
    },
  },
});

export const { setBookingDate, setBookingTime, setCanoes, setPersonalData } =
  bookingSlice.actions;
export default bookingSlice.reducer;
