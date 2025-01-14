import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SearchScreen from '../screens/rootTab/SearchScreen';
import ExploreScreen from '../screens/rootTab/ExploreScreen';
import FavoritesScreen from '../screens/rootTab/FavoritesScreen';
import DetailsModal from '../screens/rootTab/DetailsModal';

const Tab = createBottomTabNavigator();

export default function RootTab() {
  return (
    <Tab.Navigator initialRouteName="Explore">
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Explore" component={ExploreScreen} />
      <Tab.Screen name="Favorites" component={FavoritesScreen} />
    </Tab.Navigator>
  );
}
