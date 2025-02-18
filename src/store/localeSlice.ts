import { createSlice } from '@reduxjs/toolkit';

import { defaultLocale } from '@/i18n/config';

const localeSlice = createSlice({
  name: 'locale',
  initialState: {
    locale: localStorage.getItem('locale') || defaultLocale,
  },
  reducers: {
    changeLocale: (state, action) => {
      localStorage.setItem('locale', action.payload);
      state.locale = action.payload;
      return state;
    },
    initLocale: state => {
      localStorage.setItem('locale', defaultLocale);
      return state;
    },
  },
});

export const localeActions = localeSlice.actions;

const localeReducer = localeSlice.reducer;
export default localeReducer;
