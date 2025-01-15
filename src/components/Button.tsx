import {Text, TouchableOpacity} from 'react-native';
import React from 'react';

type Props = {
  title: string;
  onPress?: () => void;
  titleClassName?: string;
  opacityClassName?: string;
};

const Button = ({title, onPress, titleClassName, opacityClassName}: Props) => {
  return (
    <TouchableOpacity
      className={`bg-orange-500 justify-center items-center rounded-lg ${opacityClassName}`}
      onPress={onPress}>
      <Text className={`text-bg-color my-1 ${titleClassName}`}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
