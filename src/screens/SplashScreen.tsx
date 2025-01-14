import {View, Text, Button} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

export default function SplashScreen() {
  const navigate = useNavigation();
  return (
    <View>
      <Text>SplashScreen</Text>
      <Button title="Explore" onPress={() => navigate.navigate('RootTab')} />
    </View>
  );
}
