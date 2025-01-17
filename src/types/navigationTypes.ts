import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type RootStackParamList = {
  Splash: undefined;
  RootTab: NavigatorScreenParams<RootTabParamList>;
  Details: {imdbID: string};
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
  Watched: undefined;
  Favorites: undefined;
};

export type SearchScreenProps = CompositeScreenProps<
  BottomTabScreenProps<RootTabParamList, 'Search'>,
  NativeStackScreenProps<RootStackParamList>
>;

export type WatchedScreenProps = CompositeScreenProps<
  BottomTabScreenProps<RootTabParamList, 'Watched'>,
  NativeStackScreenProps<RootStackParamList>
>;

export type FavoritesScreenProps = CompositeScreenProps<
  BottomTabScreenProps<RootTabParamList, 'Favorites'>,
  NativeStackScreenProps<RootStackParamList>
>;
