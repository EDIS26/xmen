import React from 'react';
import { View, Button, Text, Image, StyleSheet } from 'react-native';

//import HomeNavigator from './navigation/HomeNavigator';
import DrawerNavigator from './navigation/DrawerNavigator';
import LoginScreen from './screens/LoginScreen';

import { createStackNavigator, createSwitchNavigator, createAppContainer } from 'react-navigation';


const AuthStack = createStackNavigator({ Login: LoginScreen });
const AppStack = createStackNavigator({ Home: DrawerNavigator });

export default createAppContainer(createSwitchNavigator(
  {
    Auth: AuthStack,
    Main: AppStack,
  },
  {
    initialRouteName: 'Auth',
  }
));

