import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import WelcomeScreen from './app/screens/WelcomeScreen';

import MessagesScreen from './app/screens/MessagesScreen';
// import BookingScreen from './app/screens/BookingScreen';

import Permissions from './app/screens/Permissions-test';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import AppNavigator from './app/navigation/AppNavigator';

export default function App() {
  // return <Permissions />;
  //return <WelcomeScreen />;
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}
