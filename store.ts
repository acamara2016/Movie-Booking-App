import {configureStore} from '@reduxjs/toolkit';
import lastestMoviesSlice from './features/movieSlicer';
import sportSlicer from './features/sport/sportSlicer';

export const store = configureStore({
  reducer: {
    movies: lastestMoviesSlice,
    sport: sportSlicer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
