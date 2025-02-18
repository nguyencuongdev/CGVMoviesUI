import { configureStore } from '@reduxjs/toolkit';
import localeReducer from './localeSlice';

const store = configureStore({
  reducer: {
    locale: localeReducer,
  },
});

export type RootStateType = ReturnType<typeof store.getState>;
export default store;
