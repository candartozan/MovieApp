import React, {useEffect} from 'react';
import Navigation from '@navigation/Navigation';
import '../global.css';
import {StatusBar} from 'react-native';
import {store} from '@redux/store';
import {Provider} from 'react-redux';
import SplashScreen from 'react-native-splash-screen';

export default function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={store}>
      <StatusBar barStyle="light-content" backgroundColor="#001427" />
      <Navigation />
    </Provider>
  );
}
