import {FlatList} from 'react-native';
import React from 'react';
import MovieCard from './MovieCard';
import {SearchMovieType} from '../types/movieTypes';

type Props = {
  movies: SearchMovieType[];
  onPressMovie?: (imdbID: string) => void;
};

const MovieList = ({movies, onPressMovie}: Props) => {
  return (
    <FlatList
      data={movies}
      renderItem={item => (
        <MovieCard movie={item.item} onPressMovie={onPressMovie} />
      )}
      keyExtractor={item => item.imdbID}
      numColumns={2}
      columnWrapperClassName="gap-5"
      contentContainerClassName="py-5"
      showsVerticalScrollIndicator={false}
    />
  );
};

export default MovieList;
