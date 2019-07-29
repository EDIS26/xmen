import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import DeveloperScreen from '../screens/DeveloperScreen';
import DeveloperScreenDetails from '../screens/DeveloperScreenDetails';
import DeveloperScreenEdit from '../screens/DeveloperScreenEdit';
import DeveloperScreenAdd from '../screens/DeveloperScreenAdd';
//import MaterialTopTabNavigatorApp from '../navigation/MaterialTopTabNavigatorApp';

const RootStack = createStackNavigator(
  {
    //Home: MaterialTopTabNavigatorApp,
    Developer: DeveloperScreen,
    DetailDeveloper: DeveloperScreenDetails,
    AddDeveloper: DeveloperScreenAdd,
    EditDeveloper: DeveloperScreenEdit,
  },
  {
    initialRouteName: 'Developer',
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