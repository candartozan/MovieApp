import {View, Text, Image, TouchableWithoutFeedback} from 'react-native';
import React from 'react';
import {SearchMovieType} from '@srcTypes/movieTypes';

type Props = {
  movie: SearchMovieType;
  onPressMovie?: (imdbID: string) => void;
};

const MovieCard = ({movie, onPressMovie}: Props) => {
  return (
    <TouchableWithoutFeedback
      onPress={() => onPressMovie && onPressMovie(movie.imdbID)}>
      <View className="w-1/2 py-3">
        <View className="rounded-lg">
          <Image
            source={{uri: movie.Poster}}
            className="h-[300px]"
            resizeMode="contain"
          />
          <Text className="text-lg text-white">{movie.Title}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default MovieCard;
