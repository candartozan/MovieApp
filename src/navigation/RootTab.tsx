import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SearchScreen from '@screens/rootStack/rootTab/SearchScreen';
import FavoritesScreen from '@screens/rootStack/rootTab/FavoritesScreen';
import {RootTabParamList} from '@srcTypes/navigationTypes';
import TabBarIcon from '@components/TabBarIcon';
import icons from '@constants/icons';
import WatchedScreen from '@screens/rootStack/rootTab/WatchedScreen';

const Tab = createBottomTabNavigator<RootTabParamList>();

export default function RootTab() {
  return (
    <Tab.Navigator
      initialRouteName="Search"
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
        name="Watched"
        component={WatchedScreen}
        options={{
          tabBarActiveTintColor: '#f87314',
          tabBarIcon: ({color}) => (
            <TabBarIcon icon={icons.watched} color={color} />
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
