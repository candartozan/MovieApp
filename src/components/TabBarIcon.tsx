import {View, Text, Image} from 'react-native';
import React from 'react';

type Props = {
  color: string;
  icon: any;
};

const TabBarIcon = ({color, icon}: Props) => {
  return <Image source={icon} tintColor={color} />;
};

export default TabBarIcon;
