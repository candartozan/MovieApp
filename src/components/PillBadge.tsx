import {View, Text} from 'react-native';
import React from 'react';

type Props = {
  title: string;
};

const PillBadge = ({title}: Props) => {
  return (
    <View className="bg-slate-400 rounded-xl px-3 py-2">
      <Text className="text-black">{title}</Text>
    </View>
  );
};

export default PillBadge;
