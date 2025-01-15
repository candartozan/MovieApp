import {View, Text, Button} from 'react-native';
import React from 'react';
import {SplashScreenProps} from '../../types/navigationTypes';

export default function SplashScreen({navigation}: SplashScreenProps) {
  return (
    <View>
      <Text className="text-5xl">SplashScreen</Text>
      <Button
        title="Explore"
        onPress={() => navigation.navigate('RootTab', {screen: 'Explore'})}
      />
    </View>
  );
}
