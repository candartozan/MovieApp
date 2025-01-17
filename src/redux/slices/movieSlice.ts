import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {PayloadAction} from '@reduxjs/toolkit';
import {Movie} from '@srcTypes/movieTypes';
import useAxios from '@hooks/useAxios';
const axios = useAxios();

export const addMovieToFavoritesByImdbId = createAsyncThunk(
  'movie/addMovieToFavoritesByImdbId',
  async (imdbId: string) => {
    try {
      const res = await axios.get('', {params: {i: imdbId, plot: 'full'}});

      return res.data;
    } catch (error) {
      console.log(error);
      return;
    }
  },
);

export type MovieState = {
  value: Movie[];
};

const initialState: MovieState = {value: []};

export const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    removeFromFavorites: (state, action: PayloadAction<string>) => {
      state.value = state.value.filter(
        movie => movie.imdbID !== action.payload,
      );
    },
    addMovieToWatched: (state, action: PayloadAction<string>) => {
      const movie = state.value.find(m => m.imdbID === action.payload);

      if (movie) {
        state.value = state.value.map(m => {
          if (m.imdbID === movie.imdbID) {
            m.IsWatched = true;
          }
          return m;
        });
      }
    },
    removeMovieFromWatched: (state, action: PayloadAction<string>) => {
      const movie = state.value.find(m => m.imdbID === action.payload);

      if (movie) {
        state.value = state.value.map(m => {
          if (m.imdbID === movie.imdbID) {
            m.IsWatched = false;
          }
          return m;
        });
      }
    },
  },
  extraReducers: builder => {
    builder.addCase(addMovieToFavoritesByImdbId.fulfilled, (state, action) => {
      state.value.push(action.payload);
    });
  },
});

export const {removeFromFavorites, addMovieToWatched, removeMovieFromWatched} =
  movieSlice.actions;

export default movieSlice.reducer;
