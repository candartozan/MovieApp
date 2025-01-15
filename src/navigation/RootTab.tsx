import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SearchScreen from '../screens/rootStack/rootTab/SearchScreen';
import ExploreScreen from '../screens/rootStack/rootTab/ExploreScreen';
import FavoritesScreen from '../screens/rootStack/rootTab/FavoritesScreen';
import {RootTabParamList} from '../types/navigationTypes';

const Tab = createBottomTabNavigator<RootTabParamList>();

export default function RootTab() {
  return (
    <Tab.Navigator
      initialRouteName="Explore"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {backgroundColor: '#001427'},
      }}>
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Explore" component={ExploreScreen} />
      <Tab.Screen name="Favorites" component={FavoritesScreen} />
    </Tab.Navigator>
  );
}
