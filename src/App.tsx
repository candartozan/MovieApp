import React from 'react';
import Navigation from './navigation/Navigation';
import '../global.css';
import {StatusBar} from 'react-native';

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#001427" />
      <Navigation />
    </>
  );
}
