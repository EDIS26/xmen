import React from 'react';
import { View, Button, Text, Image, StyleSheet } from 'react-native';
//import firebase from 'firebase';
//import * as firebase from 'firebase';
//import HomeNavigator from '../navigation/HomeNavigator';
import { StacNavigator } from 'react-native';
import { FormLabel, FormInput } from 'react-native-elements';
import { Card } from 'react-native-paper';
import {
    createDrawerNavigator,
    createStackNavigator,
    StackActions,
    NavigationActions,
    createAppContainer
  } from 'react-navigation';
import firebase from '../configDB/firebase';

  //Dibawah Ini Merupakan inisialisasi Firebase dari Website
//*
// firebase.initializeApp({
//     apiKey: "AIzaSyDCIilsl9QVl84AVsrhpYb6wGjuhqoxc9I",
//     authDomain: "myproject-8848f.firebaseapp.com",
//     databaseURL: "https://myproject-8848f.firebaseio.com",
//     projectId: "myproject-8848f",
//     storageBucket: "myproject-8848f.appspot.com",
//     messagingSenderId: "768511626616"
// });
//*/

export default class LoginScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = { email: 'suranta.p.sinuraya@gmail.com', password: '51nur4y412876', error: '', loading: false };
    }


    openDashboard = () => {
      const resetAction = StackActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({routeName: 'Dashboard'})],
      });
      this.props.navigation.dispatch(resetAction);
    }
  
    onLoginPress() {
        this.setState({ error: '', loading: true });

        const { email, password } = this.state;
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(() => {
                this.setState({ error: '', loading: false });
                this.props.navigation.navigate('Dashboard');
                //alert('You are logged in');
                //Asyncstorage.clear;
            })
            .catch(() => {
                this.setState({ error: 'Authentication Failed to Login', loading: false });
                //this.setState({error:'Something went wrong', loading:false});
                //this.props.navigation.navigate('Main');
            })

    }

    onSignUpPress() {
        this.setState({ error: '', loading: true });

        const { email, password } = this.state;
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(() => {
                this.setState({ error: '', loading: false });
                alert('Welcome new comer! Account Anda sudah terdaftar. Silahkan login kembali!!!');
                this.props.navigation.navigate('Login');
            })
            .catch(() => {
                this.setState({ error: 'Authentication Failed to Sign Up', loading: false });
                //this.props.navigation.navigate('Main');
            })

    }

    renderButtonOrLoading() {
        if (this.state.loading) {
            return <Text> Loading </Text>
        }

        return <View>
            <Button
                onPress={this.onLoginPress.bind(this)}
                title='Login' 
                fontColor='darkorange'/>
            <Button
                onPress={this.onSignUpPress.bind(this)}
                title='Sign Up' 
                fontColor='darkorange'/>

        </View>
    }

    render() {
        return (
            <View>
                <Card alignItems='center' marginTop={38}>
                    <Image style={styles.logo} source={require('../Images/logoApp.png')} />
                </Card>

                <FormLabel>Email</FormLabel>
                <FormInput
                    value={this.state.email}
                    onChangeText={email => this.setState({ email })}
                    placeholder='email@domain.com'
                />
                <FormLabel>Password</FormLabel>
                <FormInput
                    value={this.state.password}
                    secureTextEntry
                    placeholder='*********'
                    onChangeText={password => this.setState({ password })} />
                <Text>{this.state.error}</Text>
                {this.renderButtonOrLoading()}

                <Card alignItems='center' marginTop={38} marginBottom={38}>
                    <Image style={styles.logoCopyright} source={require('../Logo/acc.png')} />
                    <Text>Copyright 2019</Text>
                </Card>
                
            </View>
        )
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
    menu: {
      marginLeft: 8,
    },
    logo: {
        height: 200,
        width: 200,
    },
    logoCopyright: {
        height: 50,
        width: 35,
        //alignItems:'center'
    },
    text: {
      flex: 1,
      fontSize: 25,
      textAlign: 'center',
      justifyContent: 'center',
    },
    textCopyright: {
        flex: 1,
        fontSize: 25,
        textAlign: 'center',
        //justifyContent: 'center',
        color: 'black'
      },
  });