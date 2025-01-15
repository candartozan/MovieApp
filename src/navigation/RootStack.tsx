import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from '../screens/rootStack/SplashScreen';
import RootTab from './RootTab';
import DetailsModal from '../screens/rootStack/DetailsModal';
import {RootStackParamList} from '../types/navigationTypes';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootStack() {
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{headerShown: false}}>
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
