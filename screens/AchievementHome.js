import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import AchievementScreen from '../screens/AchievementScreen';
import AchievementScreenDetails from '../screens/AchievementScreenDetails';
import AchievementScreenEdit from '../screens/AchievementScreenEdit';
import AchievementScreenAdd from '../screens/AchievementScreenAdd';
//import MaterialTopTabNavigatorApp from '../navigation/MaterialTopTabNavigatorApp';

const RootStack = createStackNavigator(
  {
    //Home: MaterialTopTabNavigatorApp,
    Achievement: AchievementScreen,
    DetailAchievement: AchievementScreenDetails,
    AddAchievement: AchievementScreenAdd,
    EditAchievement: AchievementScreenEdit,
  },
  {
    initialRouteName: 'Achievement',
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