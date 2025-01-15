import {View, Text, Button} from 'react-native';
import React from 'react';
import {ExploreScreenProps} from '../../../types/navigationTypes';

export default function ExploreScreen({navigation}: ExploreScreenProps) {
  return (
    <View>
      <Text>Explore</Text>
      <Button
        title="Open Modal"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}
