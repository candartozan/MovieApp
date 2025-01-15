import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type RootStackParamList = {
  Splash: undefined;
  RootTab: NavigatorScreenParams<RootTabParamList>;
  Details: undefined;
};

export type SplashScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Splash'
>;

export type RootTabProps = NativeStackScreenProps<
  RootStackParamList,
  'RootTab'
>;

export type DetailsModalProps = NativeStackScreenProps<
  RootStackParamList,
  'Details'
>;

export type RootTabParamList = {
  Search: undefined;
  Explore: undefined;
  Favorites: undefined;
};

export type SearchScreenProps = CompositeScreenProps<
  BottomTabScreenProps<RootTabParamList, 'Search'>,
  NativeStackScreenProps<RootStackParamList>
>;

export type ExploreScreenProps = CompositeScreenProps<
  BottomTabScreenProps<RootTabParamList, 'Explore'>,
  NativeStackScreenProps<RootStackParamList>
>;

export type FavoritesScreenProps = CompositeScreenProps<
  BottomTabScreenProps<RootTabParamList, 'Favorites'>,
  NativeStackScreenProps<RootStackParamList>
>;
