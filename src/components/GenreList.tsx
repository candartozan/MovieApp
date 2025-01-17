import {View, Text} from 'react-native';
import React from 'react';
import PillBadge from '@components/PillBadge';

type Props = {
  genres: string[];
};

const GenreList = ({genres}: Props) => {
  return (
    <View className="flex-row gap-2">
      {genres.map(genre => (
        <PillBadge key={genre} title={genre.trim()} />
      ))}
    </View>
  );
};

export default GenreList;
