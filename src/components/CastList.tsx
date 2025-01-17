import {View, Text, Image} from 'react-native';
import React from 'react';
import icons from '@constants/icons';

type Props = {actors: string[]};

const CastList = ({actors}: Props) => {
  return (
    <View>
      <Text className="text-white text-xl">Cast</Text>
      <View className="flex-row justify-between flex-wrap">
        {actors.map(actor => (
          <View key={actor} className="justify-center items-center">
            <Image
              source={icons.user}
              className="h-20"
              resizeMode="contain"
              tintColor={'gray'}
            />
            <Text className="text-white w-[100%]">{actor.trim()}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default CastList;
