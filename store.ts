import {configureStore} from '@reduxjs/toolkit';
import lastestMoviesSlice from './features/movieSlicer';

export const store = configureStore({
  reducer: {
    movies: lastestMoviesSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
