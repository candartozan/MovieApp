import {View, Text} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import MovieList from '@components/MovieList';
import {useSelector} from 'react-redux';
import {RootState} from '@redux/store';
import {FavoritesScreenProps} from '@srcTypes/navigationTypes';

export default function FavoritesScreen({navigation}: FavoritesScreenProps) {
  const movies = useSelector((state: RootState) => state.movie);

  const onPress = (imdbID: string) => {
    navigation.navigate('Details', {imdbID});
  };

  return (
    <SafeAreaView className="flex-1 bg-bg-color">
      <View className="mx-5">
        <View className="items-center mt-5">
          <Text className="text-white text-3xl">Favorites</Text>
        </View>
        <MovieList movies={movies.value} onPressMovie={onPress} />
      </View>
    </SafeAreaView>
  );
}
