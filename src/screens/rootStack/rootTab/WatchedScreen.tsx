import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import MovieList from '@components/MovieList';
import {useSelector} from 'react-redux';
import {RootState} from '@redux/store';
import {WatchedScreenProps} from '@srcTypes/navigationTypes';

export default function WatchedScreen({navigation}: WatchedScreenProps) {
  const movies = useSelector((state: RootState) => state.movie);

  const onPress = (imdbID: string) => {
    navigation.navigate('Details', {imdbID});
  };

  return (
    <SafeAreaView className="flex-1 bg-bg-color">
      <View className="mx-5">
        <View className="items-center mt-5">
          <Text className="text-white text-3xl">Watched Movies</Text>
        </View>
        <MovieList
          movies={movies.value.filter(m => m.IsWatched === true)}
          onPressMovie={onPress}
        />
      </View>
    </SafeAreaView>
  );
}
