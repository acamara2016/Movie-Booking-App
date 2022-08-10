import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  latestMovies: [],
  mostPopularMovies: [],
  closestTheatres: [],
  user: {},
  loggedIn: false,
};

export const fetchLastestMovies = createAsyncThunk(
  'fetchLatestMovies',
  async (limit: number) => {
    try {
      // replace the localhost link in the future
      const response = await axios(
        `https://www.cineplex.com/api/v1/movies?language=en-us&marketLanguageCodeFilter=true&movieType=1&showTimeType=0&showtimeStatus=0&skip=0&take=${limit}`,
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
);
export const fetchMostPopular = createAsyncThunk(
  'fetchMostPopular',
  async (limit: number) => {
    try {
      // replace the localhost link in the future
      const response = await axios(
        `https://www.cineplex.com/api/v1/movies?language=en-us&marketLanguageCodeFilter=true&movieType=1&showTimeType=0&showtimeStatus=0&skip=30&take=${limit}`,
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
);
export const fetchClosestTheatres = createAsyncThunk(
  'fetchClosestTheatres',
  async (range: number) => {
    try {
      // replace the localhost link in the future
      const response = await axios(
        `https://www.cineplex.com/api/v1/theatres?language=en-us&range=${range}&skip=0&take=30`,
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
);

const lastestMovieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    handleLogin: (state, action) => {
      console.log('handling login');
      state.user = action.payload;
      state.loggedIn = true;
      console.log(state.user);
      console.log(state.loggedIn);
    },
    handleLogout: (state, action) => {
      state.user = {};
      state.loggedIn = false;
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchLastestMovies.fulfilled, (state, action) => {
      state.latestMovies = action.payload.data;
    });
    builder.addCase(fetchMostPopular.fulfilled, (state, action) => {
      state.mostPopularMovies = action.payload.data;
    });
    builder.addCase(fetchClosestTheatres.fulfilled, (state, action) => {
      state.closestTheatres = action.payload.data;
    });
    // add pending and rejected states
  },
});
export const {handleLogin, handleLogout} = lastestMovieSlice.actions;
export default lastestMovieSlice.reducer;
