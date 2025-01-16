import {View, Text, Image, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import {DetailsModalProps} from '../../types/navigationTypes';
import {SafeAreaView} from 'react-native-safe-area-context';
import PillBadge from '../../components/PillBadge';
import useAxios from '../../hooks/useAxios';
import {Movie} from '../../types/movieTypes';
import Rating from '../../components/Rating';
import CastList from '../../components/CastList';
import GenreList from '../../components/GenreList';

const moviee = {
  Title: 'Batman & Robin',
  Year: '1997',
  Rated: 'PG-13',
  Released: '20 Jun 1997',
  Runtime: '125 min',
  Genre: 'Action, Sci-Fi',
  Director: 'Joel Schumacher',
  Writer: 'Bob Kane, Akiva Goldsman',
  Actors: "Arnold Schwarzenegger, George Clooney, Chris O'Donnell",
  Plot: 'Batman and Robin try to keep their relationship together even as they must stop Mr. Freeze and Poison Ivy from freezing Gotham City.',
  Language: 'English',
  Country: 'United States, United Kingdom',
  Awards: '10 wins & 22 nominations total',
  Poster:
    'https://m.media-amazon.com/images/M/MV5BYzU3ZjE3M2UtM2E4Ni00MDI5LTkyZGUtOTFkMGIyYjNjZGU3XkEyXkFqcGc@._V1_SX300.jpg',
  Ratings: [
    {
      Source: 'Internet Movie Database',
      Value: '3.8/10',
    },
    {
      Source: 'Rotten Tomatoes',
      Value: '12%',
    },
    {
      Source: 'Metacritic',
      Value: '29/100',
    },
  ],
  Metascore: '29',
  imdbRating: '3.8',
  imdbVotes: '273,069',
  imdbID: 'tt0118688',
  Type: 'movie',
  DVD: 'N/A',
  BoxOffice: '$107,353,792',
  Production: 'N/A',
  Website: 'N/A',
  Response: 'True',
};

export default function DetailsModal({route, navigation}: DetailsModalProps) {
  const [movie, setMovie] = useState<Movie | undefined>(undefined);
  const axios = useAxios();

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const res = await axios.get('', {
          params: {
            i: route.params.imdbID,
            plot: 'full',
          },
        });

        setMovie(res.data);
      } catch (error) {
        console.log(error);
        navigation.goBack();
      }
    };

    fetchMovie();
  });

  if (!movie) return null;

  return (
    <SafeAreaView className="flex-1 bg-bg-color">
      <ScrollView className="flex-1">
        <View>
          <Image source={{uri: movie.Poster}} className="h-[400px]" />
        </View>

        <View className="gap-2 mx-5">
          <Text className="text-3xl text-white mt-3">{movie.Title}</Text>

          <GenreList genres={movie.Genre.split(',')} />

          <Text className="text-sm text-white">
            {movie.Runtime} - {movie.Released}
          </Text>
          <Text className="text-base text-white">{movie.Plot}</Text>

          <Text className="text-lg text-white">
            Director - {movie.Director}
          </Text>

          <CastList actors={movie.Actors.split(',')} />

          <Rating rating={Number.parseFloat(movie.imdbRating)} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
