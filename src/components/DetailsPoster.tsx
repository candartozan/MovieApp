import {View, Image, TouchableWithoutFeedback} from 'react-native';
import React from 'react';
import icons from '@constants/icons';

type Props = {
  posterUri: string;
  back?: () => void;
  isFavorite: boolean;
  addFavorite?: () => void;
};

const DetailsPoster = ({posterUri, back, isFavorite, addFavorite}: Props) => {
  return (
    <View>
      <View className="flex-row justify-between absolute z-50 w-full px-5 mt-3">
        <TouchableWithoutFeedback onPress={back}>
          <Image
            source={icons.backArrow}
            resizeMode="contain"
            tintColor="#f87314"
          />
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback onPress={addFavorite}>
          <Image
            source={icons.star}
            resizeMode="contain"
            tintColor={isFavorite ? '#ffc100' : 'white'}
          />
        </TouchableWithoutFeedback>
      </View>
      <Image source={{uri: posterUri}} className="h-[400px]" />
    </View>
  );
};

export default DetailsPoster;
