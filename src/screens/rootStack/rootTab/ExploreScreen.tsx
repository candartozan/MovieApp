import {View, Text, Button} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

export default function ExploreScreen() {
  const navigate = useNavigation();
  return (
    <View>
      <Text>Explore</Text>
      <Button
        title="Open Modal"
        onPress={() => navigate.navigate('Details')}
      />
    </View>
  );
}
