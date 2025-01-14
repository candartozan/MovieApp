import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from '../screens/rootStack/SplashScreen';
import RootTab from './RootTab';
import DetailsModal from '../screens/rootStack/DetailsModal';

const Stack = createNativeStackNavigator();

export default function RootStack() {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="RootTab" component={RootTab} />
      <Stack.Screen
        name="Details"
        component={DetailsModal}
        options={{presentation: 'modal'}}
      />
    </Stack.Navigator>
  );
}
