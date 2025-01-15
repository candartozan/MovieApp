import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import MovieCard from './MovieCard';
import {SearchMovieType} from '../types/movieTypes';

type Props = {
  movies: SearchMovieType[];
  emptyMessage?: string;
};

const MovieList = ({movies,emptyMessage}: Props) => {
  return (
    <ScrollView className="flex-1 my-5" showsVerticalScrollIndicator={false}>
      <View className="flex-row flex-wrap">
        {movies.length === 0 ? (
          <View className="flex-1 justify-center items-center">
            <Text className="text-white text-3xl">{emptyMessage}</Text>
          </View>
        ) : (
          movies.map(movie => <MovieCard key={movie.imdbID} movie={movie} />)
        )}
      </View>
    </ScrollView>
  );
};

export default MovieList;
