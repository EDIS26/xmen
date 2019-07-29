import React from 'react';
import { View, Button, Text, Image, StyleSheet } from 'react-native';
import firebase from 'firebase';
//import * as firebase from 'firebase';
//import HomeNavigator from '../navigation/HomeNavigator';
import { StacNavigator } from 'react-native';
import { FormLabel, FormInput } from 'react-native-elements';
import { Card } from 'react-native-paper';

//Dibawah Ini Merupakan inisialisasi Firebase dari Website
//*
firebase.initializeApp({
    apiKey: "AIzaSyDCIilsl9QVl84AVsrhpYb6wGjuhqoxc9I",
    authDomain: "myproject-8848f.firebaseapp.com",
    databaseURL: "https://myproject-8848f.firebaseio.com",
    projectId: "myproject-8848f",
    storageBucket: "myproject-8848f.appspot.com",
    messagingSenderId: "768511626616"
});
//*/

export default class LoginScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = { email: '', password: '', error: '', loading: false };
    }

    onLoginPress() {
        this.setState({ error: '', loading: true });

        const { email, password } = this.state;
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(() => {
                this.setState({ error: '', loading: false });
                this.props.navigation.navigate('Main');
                //alert('You are logged in');
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
                this.props.navigation.navigate('Auth');
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
                title='Login' />
            <Button
                onPress={this.onSignUpPress.bind(this)}
                title='Sign Up' />

        </View>
    }

    render() {
        return (
            <View>
                <Card alignItems='center' marginTop={38}>
                    <Image style={styles.logo} source={require('../Logo/acc.png')} />
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
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 24,
    },
    paragraph: {
        margin: 24,
        marginTop: 0,
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    logo: {
        height: 200,
        width: 150,
    }
});