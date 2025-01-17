import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SearchScreen from '@screens/rootStack/rootTab/SearchScreen';
import ExploreScreen from '@screens/rootStack/rootTab/ExploreScreen';
import FavoritesScreen from '@screens/rootStack/rootTab/FavoritesScreen';
import {RootTabParamList} from '@srcTypes/navigationTypes';
import TabBarIcon from '@components/TabBarIcon';
import icons from '@constants/icons';

const Tab = createBottomTabNavigator<RootTabParamList>();

export default function RootTab() {
  return (
    <Tab.Navigator
      initialRouteName="Explore"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {backgroundColor: '#001427'},
      }}>
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarActiveTintColor: '#f87314',
          tabBarIcon: ({color}) => (
            <TabBarIcon icon={icons.search} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Explore"
        component={ExploreScreen}
        options={{
          tabBarActiveTintColor: '#f87314',
          tabBarIcon: ({color}) => (
            <TabBarIcon icon={icons.compass} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          tabBarActiveTintColor: '#f87314',
          tabBarIcon: ({color}) => (
            <TabBarIcon icon={icons.star} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
