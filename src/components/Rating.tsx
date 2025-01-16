import {View, Text, Image} from 'react-native';
import React from 'react';
import icons from '../constants/icons';

type Props = {
  rating: number;
};

const Rating = ({rating}: Props) => {
  const iconArray = [];

  for (let i = 0; i < 5; i++) {
    if (rating / 2 - i >= 1) {
      iconArray.push(icons.star);
    } else if (rating / 2 - i > 0) {
      iconArray.push(icons.starHalf);
    } else {
      iconArray.push(icons.starEmpty);
    }
  }

  return (
    <View className="my-5">
      <Text className="text-xl text-white">{rating}</Text>
      <View className="flex-row justify-around">
        {iconArray.map((icon, index) => (
          <View key={index}>
            <Image
              source={icon}
              className="h-30 w-30"
              resizeMode="stretch"
              tintColor="#ffc100"
            />
          </View>
        ))}
      </View>
    </View>
  );
};

export default Rating;
