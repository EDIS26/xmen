import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import TargetScreen from '../screens/TargetScreen';
import TargetScreenDetails from '../screens/TargetScreenDetails';
import TargetScreenEdit from '../screens/TargetScreenEdit';
import TargetScreenAdd from '../screens/TargetScreenAdd';

const RootStack = createStackNavigator(
  {
    Target: TargetScreen,
    DetailTarget: TargetScreenDetails,
    AddTarget: TargetScreenAdd,
    EditTarget: TargetScreenEdit,
  },
  {
    initialRouteName: 'Target',
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#777777',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      headerBackTitle: null,
    },
  },
);

// export default class DeveloperHome extends React.Component {
//   render() {
//     return <RootStack />;
//   }
// }

export default createAppContainer(RootStack);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});