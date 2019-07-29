import React, {Component} from 'react';
import {
  StyleSheet,
  //Button,
  Image,
  TouchableWithoutFeedback,
  View,
  Text
} from 'react-native';
import {
  createDrawerNavigator,
  createStackNavigator,
  StackActions,
  NavigationActions,
  createAppContainer,
  DrawerItems,
  SafeAreaView
} from 'react-navigation';
import { Button } from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons'; // 6.2.2

import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import DeveloperHome from './screens/DeveloperHome';
import ProjectHome from './screens/ProjectHome';
import MatrixHome from './screens/MatrixHome';
import AchievementHome from './screens/AchievementHome';
import NotificationsScreen from './screens/NotificationScreen';
import SearchScreen from './screens/SearchScreen';
import SettingsScreen from './screens/SettingsScreen';
import AboutScreen from './screens/AboutScreen';
import TargetHome from './screens/TargetHome';


class LogoutScreen extends React.Component {
  //this.props.navigation.navigate(resetAction);
  // <TouchableWithoutFeedback onPress={() => navigation.navigate('Login')}>
  // </TouchableWithoutFeedback>

  render() {
    return (
        <View style={styles.container}>
        <Text >Terima Kasih sudah mampir di X-Men App!</Text>
          <Button
              onPress={() => this.props.navigation.navigate('Login')}
              title="Go Log Out"
          />
        </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 25,
  },
  icon: {
    width: 25,
    height: 25,
  },
  iconLogout: {
    width: 100,
    height: 45,
    marginLeft: 4,
    marginRight: 4,
    justifyContent: 'flex-end',
    paddingHorizontal: 138,
    paddingTop:0
  },
  iconDrawer: {
    width: 138,
    height: 68,
    marginLeft: 0,
    marginRight: 0,
    paddingHorizontal: 253,
    paddingTop:0
  },
  menu: {
    marginLeft: 8,
  },
  logo: {
    width: 35,
    height: 50,
    marginRight: 4,
    marginTop: 4,
  },
  text: {
    flex: 1,
    fontSize: 25,
    textAlign: 'center',
    justifyContent: 'center',
  },
  logoutText: {
    flex: 1,
    textAlign: 'left',
    justifyContent: 'center',
  },
});

const renderMenu = (navigation) => (
    <TouchableWithoutFeedback onPress={() => navigation.openDrawer()}>
      <Image
          source={require('./Images/menu.png')}
          style={[styles.icon, styles.menu]} //, styles.menu]}
      />
    </TouchableWithoutFeedback>
)

const showLogo = (navigation) => (
  <TouchableWithoutFeedback>
    <Image
        source={require('./Logo/acc.png')}
        style={[styles.logo]} //, styles.menu]}
    />
  </TouchableWithoutFeedback>
)

const showIconHeader = (navigation) => (
  <TouchableWithoutFeedback>
    <Image
        source={require('./Images/home.png')}
        style={[styles.logo]} //, styles.menu]}
    />
  </TouchableWithoutFeedback>
)

  const Home = createStackNavigator({
    Home: {
      screen: HomeScreen,
      navigationOptions: ({navigation}) => ({
        title: 'Home',
        headerLeft: renderMenu(navigation),
        headerMiddle: showIconHeader(navigation), 
        headerRight: showLogo(navigation)
      }),
    }
  })

  const Developer = createStackNavigator({
    Developer: {
      screen: DeveloperHome,
      navigationOptions: ({navigation}) => ({
        title: 'Developer',
        headerLeft: renderMenu(navigation),
        headerRight: showLogo(navigation)
      }),
    }
  })

  const Project = createStackNavigator({
    Project: {
      screen: ProjectHome,
      navigationOptions: ({navigation}) => ({
        title: 'Project',
        headerLeft: renderMenu(navigation),
        headerRight: showLogo(navigation)
      }),
    }
  })

  const Matrix = createStackNavigator({
    Matrix: {
      screen: MatrixHome,
      navigationOptions: ({navigation}) => ({
        title: 'Matrix',
        headerLeft: renderMenu(navigation),
        headerRight: showLogo(navigation)
      }),
    }
  })

  const Achievement = createStackNavigator({
    Achievement: {
      screen: AchievementHome,
      navigationOptions: ({navigation}) => ({
        title: 'Achievement',
        headerLeft: renderMenu(navigation),
        headerRight: showLogo(navigation)
      })
    }
  })

const Notifications = createStackNavigator({
  Notifications: {
    screen: NotificationsScreen,
    navigationOptions: ({navigation}) => ({
      title: 'Notifications',
      headerLeft: renderMenu(navigation),
      headerRight: showLogo(navigation)
    })
  }
})

const Search = createStackNavigator({
  Search: {
    screen: SearchScreen,
    navigationOptions: ({navigation}) => ({
      title: 'Search',
      headerLeft: renderMenu(navigation),
      headerRight: showLogo(navigation)
    })
  }
})

const Settings = createStackNavigator({
  Settings: {
    screen: SettingsScreen,
    navigationOptions: ({navigation}) => ({
      title: 'Settings',
      headerLeft: renderMenu(navigation),
      headerRight: showLogo(navigation)
    })
  }
})

const About = createStackNavigator({
  About: {
    screen: AboutScreen,
    navigationOptions: ({navigation}) => ({
      title: 'About',
      headerLeft: renderMenu(navigation),
      headerRight: showLogo(navigation)
    })
  }
})

const Target = createStackNavigator({
  Target: {
    screen: TargetHome,
    navigationOptions: ({navigation}) => ({
      title: 'Target',
      headerLeft: renderMenu(navigation),
      headerRight: showLogo(navigation),
    })
  }
})

const Dashboard = createDrawerNavigator(
    {
      ACC: {
        screen: Home,
        navigationOptions: {
          drawerLabel: 'ACC',
          drawerIcon: (
            <Image
            source={require('./Logo/acc.png')}
            style={styles.iconDrawer}
          />
          ),
        }
      },
      Home: {
        screen: Home,
        navigationOptions: {
          drawerLabel: 'Home',
          drawerIcon: (
            <Image
            source={require('./Images/home.png')}
            style={styles.icon}
          />
          ),
        }
      },
      Developer: {
        screen: Developer,
        navigationOptions: {
          drawerLabel: 'Developer',
          drawerIcon: (
            <Image
            source={require('./Images/developer.png')}
            style={styles.icon}
        />
          ),
        }
      },
      Project: {
        screen: Project,
        navigationOptions: {
          drawerLabel: 'Project',
          drawerIcon: (
            <Image
            source={require('./Images/project.png')}
            style={styles.icon}
        />
          ),
        }
      },
      Matrix: {
        screen: Matrix,
        navigationOptions: {
          drawerLabel: 'Matrix',
          drawerIcon: (
            <Image
            source={require('./Images/matrix.png')}
            style={styles.icon}
        />
          ),
        }
      },
      Target: {
        screen: Target,
        navigationOptions: {
          drawerLabel: 'Target',
          drawerIcon: (
            <Image
            source={require('./Images/target.png')}
            style={styles.icon}
        />
          ),
        }
      },
      Achievement: {
        screen: Achievement,
        navigationOptions: {
          drawerLabel: 'Achievement',
          drawerIcon: (
            <Image
            source={require('./Images/achievement.png')}
            style={styles.icon}
        />
          ),
        }
      },
      Notifications: {
        screen: Notifications,
        navigationOptions: {
          drawerLabel: 'Notifications',
          drawerIcon: (
              <Image
                  source={require('./Images/notification.png')}
                  style={styles.icon}
              />
          ),
        }
      },
      Search: {
        screen: Search,
        navigationOptions: {
          drawerLabel: 'Search',
          drawerIcon: (
            <Image
            source={require('./Images/search.png')}
            style={styles.icon}
        />
          ),
        }
      },
      Settings: {
        screen: Settings,
        navigationOptions: {
          drawerLabel: 'Settings',
          drawerIcon: (
            <Image
            source={require('./Images/settings.png')}
            style={styles.icon}
        />
          ),
        }
      },
      About: {
        screen: About,
        navigationOptions: {
          drawerLabel: 'About',
          drawerIcon: (
            <Image
            source={require('./Images/about.png')}
            style={styles.icon}
        />
          ),
        }
      },
      // LogOut: {
      //   screen: LoginScreen,
      //   navigationOptions: {
      //     drawerLabel: 'Log Out',
      //     drawerIcon: (
      //         <Image
      //             source={require('./Images/logoff.png')}
      //             style={styles.icon}
      //             //onPress={() => this.props.navigation.navigate('Login')}
      //         />
      //     ),
          
      //   }
      // },
    },
    {
      contentComponent:(props) => (
          <View style={{flex:1}}>
                <SafeAreaView forceInset={{ top:'always', horizontal:'never'}}>
                        <DrawerItems {...props} />
                            <TouchableWithoutFeedback onPress={() => { props.navigation.navigate('Login') }}>
                              <Image
                                  source={require('./Images/logout.png')}
                                  style={styles.iconLogout}
                                  //onPress={() => props.navigation.navigate('Login')}
                              />
                            </TouchableWithoutFeedback>
                </SafeAreaView>
          </View>
      ),
      contentOptions: {
        activeTintColor: 'darkorange',
        itemsContainerStyle: {
          marginVertical: 0,
        },
        iconContainerStyle: {
          opacity: 100
        }
      },
      drawerPosition: 'left',
      drawerOpenRoute: 'DrawerOpen',
      drawerCloseRoute: 'DrawerClose',
      drawerToggleRoute: 'DrawerToggle',
      drawerBackgroundColor:'#3399ff'
    }
);

const myDrawerNavigator = createStackNavigator(
    {
      Login: {
        screen: LoginScreen,
      },
      Dashboard: Dashboard
    },
    {
      initialRouteName: 'Login',
      headerMode: 'none'
    }
)

export default createAppContainer(myDrawerNavigator);