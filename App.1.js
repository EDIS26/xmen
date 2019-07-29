// import React from 'react';
// import { Text, View } from 'react-native';
// import Ionicons from 'react-native-vector-icons/Ionicons'; // 6.2.2
// //import { Ionicons } from '@expo/vector-icons'; // 6.2.2
// import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

// import HomeScreen from './screens/HomeScreen';
// import MasterScreen from './screens/MasterScreen';
// import NotificationScreen from './screens/NotificationScreen';
// import SettingsScreen from './screens/SettingsScreen';

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
//   if (routeName === 'Home') {
//     iconName = `ios-home${focused ? '' : '-outline'}`;
//     // We want to add badges to home tab icon
//     //IconComponent = HomeIconWithBadge;
//   } else if (routeName === 'Master') {
//     iconName = `ios-people${focused ? '' : '-outline'}`;
//   } else if (routeName === 'Notification') {
//     iconName = `ios-notifications${focused ? '' : '-outline'}`;
//     IconComponent = HomeIconWithBadge;
//   } else if (routeName === 'Settings') {
//     iconName = `ios-settings${focused ? '' : '-outline'}`;
//   }

//   // You can return any component that you like here!
//   return <IconComponent name={iconName} size={30} color={tintColor} />;
// };

// export default createAppContainer(
//   createBottomTabNavigator(
//     {
//       Home: { screen: HomeScreen },
//       Master: { screen: MasterScreen },
//       Notification: { screen: NotificationScreen },
//       Settings: { screen: SettingsScreen },
//     },
//     {
//       defaultNavigationOptions: ({ navigation }) => ({
//         tabBarIcon: ({ focused, tintColor }) =>
//           getTabBarIcon(navigation, focused, tintColor),
//       }),
//       tabBarOptions: {
//         // activeTintColor: 'blue',
//         // inactiveTintColor: 'gray',
//         activeTintColor: 'tomato',
//         activeBackgroundColor: '#2874A6',

//         inactiveTintColor: 'lightgrey',
//         inactiveBackgroundColor: '#2874A6',

//         showLabel: true,
//         showIcon: true,
//         style: {
//           backgroundColor: '#7B3037',
//         },
//         tabStyle: {
//         },
//         labelStyle: {
//           fontSize: 12,
//         },
//       },
//       animationEnabled: false,
//       swipeEnabled: false,
//       },
//   )
// );

////////////////////////////////////////////////////////////////////////////////////////////////////////////

import React from 'react';
import {View, Button, Text} from 'react-native';
//import firebase from 'firebase';
//import * as firebase from 'firebase';
//import HomeNavigator from './navigation/HomeNavigator';
import { StacNavigator } from 'react-native';
import { FormLabel, FormInput } from 'react-native-elements';


// Dibawah Ini Merupakan inisialisasi Firebase dari Website
// /*
// firebase.initializeApp({
//   apiKey: "AIzaSyDCIilsl9QVl84AVsrhpYb6wGjuhqoxc9I",
//     authDomain: "myproject-8848f.firebaseapp.com",
//     databaseURL: "https://myproject-8848f.firebaseio.com",
//     projectId: "myproject-8848f",
//     storageBucket: "myproject-8848f.appspot.com",
//     messagingSenderId: "768511626616"
// });
// */

export default class login extends React.Component{
    constructor(props){
        super(props);
        this.state = {email:'', password:'', error:'', loading:false};
    }

    // onLoginPress(){
    //     this.setState({error:'', loading:true});
        
    //     const{email, password} = this.state;
    //     firebase.auth().signInWithEmailAndPassword(email, password)
    //     .then(() => {
    //         this.setState({error:'', loading:false});
    //         //this.props.navigation.navigate('HomeNavigator');
    //         alert('You are logged in');
    //     })
    //     .catch(() => {
    //         this.setState({error:'Authentication Failed ', loading:false});
    //         //this.setState({error:'Something went wrong', loading:false});
    //     })
 
    // }

    // onSignUpPress(){
    //     this.setState({error:'', loading:true});
        
    //     const{email, password} = this.state;
    //     firebase.auth().createUserWithEmailAndPassword(email, password)
    //     .then(() => {
    //         this.setState({error:'', loading:false});
    //         //]this.props.navigation.navigate('Main');
    //     })
    //     .catch(() => {
    //         this.setState({error:'Authentication Failed', loading:false});
    //     })
 
    // }

    // renderButtonOrLoading(){
    //     if (this.state.loading) {
    //         return <Text> Loading </Text>
    //     }

    //     return <View>
    //         <Button 
    //         onPress={this.onLoginPress.bind(this)} 
    //         title= 'Login'/>
            
    //         <Button 
    //         onPress={this.onSignUpPress.bind(this)} 
    //         title='Sign Up'/>
    //     </View>
    // }

    render(){
        return(
            <View>
                <FormLabel>Email</FormLabel>
                <FormInput 
                value = {this.state.email}
                onChangeText={email => this.setState({email})}
                placeholder='email@domain.com'
                />
                <FormLabel>Password</FormLabel>
                <FormInput 
                value = {this.state.password}
                secureTextEntry
                placeholder='*********'
                onChangeText={password => this.setState({password})}/>
                <Text>{this.state.error}</Text>  
            </View>
        )
    }
}