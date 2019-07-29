import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import ProjectScreen from '../screens/ProjectScreen';
import ProjectScreenDetails from '../screens/ProjectScreenDetails';
import ProjectScreenEdit from '../screens/ProjectScreenEdit';
import ProjectScreenAdd from '../screens/ProjectScreenAdd';

const RootStack = createStackNavigator(
  {
    Project: ProjectScreen,
    DetailProject: ProjectScreenDetails,
    AddProject: ProjectScreenAdd,
    EditProject: ProjectScreenEdit,
  },
  {
    initialRouteName: 'Project',
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