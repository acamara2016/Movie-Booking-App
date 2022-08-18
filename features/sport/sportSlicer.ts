import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import mockLeague from '../../mocks/leagues.json';
import mockFixtures from '../../mocks/fixtures.json';
import {Fixture, Fixtures} from '../../types/';
const initialState = {
  leagues: [],
  fixtures: [],
  matches: {
    liveMatch: [],
    elapsedMatch: [],
  },
};

export const fetchLeagues = createAsyncThunk('fetchLeagues', async () => {
  try {
    // replace the localhost link in the future
    return {
      leagues: mockLeague.leagues,
      fixtures: mockFixtures.fixtures,
    };
  } catch (error) {
    console.log(error);
    return [];
  }
});

const sportSlicer = createSlice({
  name: 'sport',
  initialState,
  reducers: {
    getCacheValue: (state: any) => {
      console.log(state);
      return state;
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchLeagues.fulfilled, (state, action) => {
      const {fixtures, leagues} = action.payload;
      state.leagues = leagues;
      state.fixtures = fixtures;
      // state.matches.liveMatch = liveMatch;
      // state.matches.elapsedMatch = elapsedMatch;
    });
    // add pending and rejected states
  },
});
export const {getCacheValue} = sportSlicer.actions;
export default sportSlicer.reducer;
