import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SearchScreen from '../screens/rootStack/rootTab/SearchScreen';
import ExploreScreen from '../screens/rootStack/rootTab/ExploreScreen';
import FavoritesScreen from '../screens/rootStack/rootTab/FavoritesScreen';
import DetailsModal from '../screens/rootStack/DetailsModal';

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
