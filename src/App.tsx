import React from 'react';
import Navigation from './navigation/Navigation';
import '../global.css';
import {StatusBar} from 'react-native';
import {store} from './redux/store';
import {Provider} from 'react-redux';

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar barStyle="light-content" backgroundColor="#001427" />
      <Navigation />
    </Provider>
  );
}
