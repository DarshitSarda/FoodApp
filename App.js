/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import SignInScreen from './src/screens/SignInScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import Navigation from './src/navigation';
import { NavigationContainer } from '@react-navigation/native';
import HomePage from './src/screens/HomePage';
import CuisineScreen from './src/screens/CuisineScreen';
import FavouriteScreen from './src/screens/FavouriteScreen';
import SupportScreen from './src/screens/SupportScreen';
import BottomNav from './src/screens/BottomNav';
import Providers from './src/navigation/Providers';

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */
const App = () => {
  return (
  <Providers/> 
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor : '#ffffe0'
  }
});
export default App;
