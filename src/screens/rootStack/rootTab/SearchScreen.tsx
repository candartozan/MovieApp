import {View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import MovieList from '../../../components/MovieList';
import SearchBar from '../../../components/SearchBar';
import useDebounce from '../../../hooks/useDebounce';
import {SearchMovieType} from '../../../types/movieTypes';
import useAxios from '../../../hooks/useAxios';

export default function SearchScreen() {
  const [searchInput, setSearchInput] = useState('');
  const [movies, setMovies] = useState<SearchMovieType[]>([]);
  const dSearchInput = useDebounce(searchInput);
  const axios = useAxios();

  useEffect(() => {
    const search = async () => {
      if (dSearchInput) {
        try {
          const res = await axios.get('', {params: {s: dSearchInput}});
          if (res.data?.Search) setMovies(res.data.Search);
        } catch (error) {}
      }
    };

    search();
  }, [dSearchInput]);

  return (
    <SafeAreaView className="flex-1 bg-bg-color">
      <View className="flex-1 mx-5">
        <SearchBar value={searchInput} onChangeText={setSearchInput} />
        <MovieList movies={movies} emptyMessage="Search Movies" />
      </View>
    </SafeAreaView>
  );
}
