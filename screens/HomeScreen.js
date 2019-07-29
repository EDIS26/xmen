import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import MaterialTopTabNavigatorApp from '../navigation/MaterialTopTabNavigatorApp';


export default class HomeScreen extends Component{
  render() {
    return (

      <MaterialTopTabNavigatorApp />
  
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});


// import React from 'react';
// import { Text, View } from 'react-native';
// import Ionicons from 'react-native-vector-icons/Ionicons'; // 6.2.2
// //import { Ionicons } from '@expo/vector-icons'; // 6.2.2
// import { createMaterialTopTabNavigator, createAppContainer } from 'react-navigation';

// //import HomeScreen from '../screens/HomeScreen';
// //import LoginScreen from './screens/LoginScreen';
// //import HomeScreen from './screens/HomeScreen';
// import DeveloperScreen from '../screens/DeveloperScreen';
// import ProjectScreen from '../screens/ProjectScreen';
// import MatrixScreen from '../screens/MatrixScreen';
// import AchievementScreen from '../screens/AchievementScreen';
// //import NotificationsScreen from './screens/NotificationScreen';
// import SearchScreen from '../screens/SearchScreen';
// //import SettingsScreen from './screens/SettingsScreen';

// class IconWithBadge extends React.Component {
//   render() {
//     const { name, badgeCount, color, size } = this.props;
//     return (
//       <View style={{ width: 24, height: 24, margin: 5 }}>
//         <Ionicons name={name} size={size} color={color} />
//         {badgeCount > 0 && (
//           <View
//             style={{
//               // /If you're using react-native < 0.57 overflow outside of the parent
//               // will not work on Android, see https://git.io/fhLJ8
//               position: 'absolute',
//               right: -6,
//               top: -3,
//               backgroundColor: 'red',
//               borderRadius: 6,
//               width: 12,
//               height: 12,
//               justifyContent: 'center',
//               alignItems: 'center',
//             }}>
//             <Text style={{ color: 'white', fontSize: 10, fontWeight: 'bold' }}>
//               {badgeCount}
//             </Text>
//           </View>
//         )}
//       </View>
//     );
//   }
// }

// const HomeIconWithBadge = props => {
//   // You should pass down the badgeCount in some other ways like context, redux, mobx or event emitters.
//   return <IconWithBadge {...props} badgeCount={3} />;
// };

// const getTabBarIcon = (navigation, focused, tintColor) => {
//   const { routeName } = navigation.state;
//   let IconComponent = Ionicons;
//   let iconName;
//   if (routeName === 'Developer') {
//     iconName = `ios-home${focused ? '' : '-outline'}`;
//     // We want to add badges to home tab icon
//     //IconComponent = HomeIconWithBadge;
//   } else if (routeName === 'Project') {
//     iconName = `ios-people${focused ? '' : '-outline'}`;
//   } else if (routeName === 'Matrix') {
//     iconName = `ios-notifications${focused ? '' : '-outline'}`;
//     //IconComponent = HomeIconWithBadge;
//   } else if (routeName === 'Achieve') {
//     iconName = `ios-settings${focused ? '' : '-outline'}`;
//   // } else if (routeName === 'Search') {
//   //   iconName = `ios-search${focused ? '' : '-outline'}`;
//   }

//   // You can return any component that you like here!
//   return <IconComponent name={iconName} size={30} color={tintColor} />;
// };

// const MaterialTopTabNavigator = createMaterialTopTabNavigator(
//   {
//     Developer: { screen: DeveloperScreen },
//     Project: { screen: ProjectScreen },
//     Matrix: { screen: MatrixScreen },
//     Achieve: { screen: AchievementScreen },
//     //Search: { screen: SearchScreen },
//   },
//   {
//     defaultNavigationOptions: ({ navigation }) => ({
//       tabBarIcon: ({ focused, tintColor }) =>
//         getTabBarIcon(navigation, focused, tintColor),
//     }),
//     tabBarOptions: {
//       // activeTintColor: 'blue',
//       // inactiveTintColor: 'gray',
//       activeTintColor: 'yellow',
//       activeBackgroundColor: '#2874A6',

//       inactiveTintColor: 'white',
//       inactiveBackgroundColor: '#2874A6',

//       showLabel: true,
//       showIcon: false,
//       style: {
//         backgroundColor: '#3399ff',
//       },
//       tabStyle: {
//       },
//       labelStyle: {
//         fontSize: 12,
//         fontWeight: 'bold'
//       },
//     },
//     animationEnabled: false,
//     swipeEnabled: false,
//     //tabBarPosition: 'top',
//     },
// )

// const MaterialTopTabNavigatorApp = createAppContainer(MaterialTopTabNavigator);
// export default MaterialTopTabNavigatorApp;



