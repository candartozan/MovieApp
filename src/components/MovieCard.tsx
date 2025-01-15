import {View, Text, Image} from 'react-native';
import React from 'react';
import {SearchMovieType} from '../types/movieTypes';

type Props = {
  movie: SearchMovieType;
};

const MovieCard = ({movie}: Props) => {
  return (
    <View className="w-1/2">
      <View className="m-2 rounded-lg">
        <Image
          source={{uri: movie.Poster}}
          style={{width: '100%', height: 200}}
          resizeMode="cover"
        />
        <Text className="text-lg text-white">{movie.Title}</Text>
      </View>
    </View>
  );
};

export default MovieCard;
