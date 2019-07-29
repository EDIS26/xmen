import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import MatrixScreen from '../screens/MatrixScreen';
import MatrixScreenDetails from '../screens/MatrixScreenDetails';
import MatrixScreenEdit from '../screens/MatrixScreenEdit';
import MatrixScreenAdd from '../screens/MatrixScreenAdd';

const RootStack = createStackNavigator(
  {
    Matrix: MatrixScreen,
    DetailMatrix: MatrixScreenDetails,
    AddMatrix: MatrixScreenAdd,
    EditMatrix: MatrixScreenEdit,
  },
  {
    initialRouteName: 'Matrix',
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