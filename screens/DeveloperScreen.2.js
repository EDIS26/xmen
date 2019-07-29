import React from 'react';
import { View, Button, Text, Image, StyleSheet, TextInput } from 'react-native';
import firebase from 'firebase';
//import * as firebase from 'firebase';
//import HomeNavigator from '../navigation/HomeNavigator';
import { StacNavigator } from 'react-native';
import { FormLabel, FormInput } from 'react-native-elements';
import { Card } from 'react-native-paper';

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

export default class DeveloperScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = { npk: '', nama: '', hp: '', email: '', alamat: '', error: '', loading: false };
    }

    // onLoginPress() {
    //     this.setState({ error: '', loading: true });

    //     const { email, password } = this.state;
    //     firebase.auth().signInWithEmailAndPassword(email, password)
    //         .then(() => {
    //             this.setState({ error: '', loading: false });
    //             this.props.navigation.navigate('Main');
    //             //alert('You are logged in');
    //         })
    //         .catch(() => {
    //             this.setState({ error: 'Authentication Failed to Login', loading: false });
    //             //this.setState({error:'Something went wrong', loading:false});
    //             //this.props.navigation.navigate('Main');
    //         })

    // }

    // onSignUpPress() {
    //     this.setState({ error: '', loading: true });

    //     const { email, password } = this.state;
    //     firebase.auth().createUserWithEmailAndPassword(email, password)
    //         .then(() => {
    //             this.setState({ error: '', loading: false });
    //             alert('Welcome new comer! Account Anda sudah terdaftar. Silahkan login kembali!!!');
    //             this.props.navigation.navigate('Auth');
    //         })
    //         .catch(() => {
    //             this.setState({ error: 'Authentication Failed to Sign Up', loading: false });
    //             //this.props.navigation.navigate('Main');
    //         })

    // }

    // renderButtonOrLoading() {
    //     if (this.state.loading) {
    //         return <Text> Loading </Text>
    //     }

    //     return <View>
    //         <Button
    //             onPress={this.onLoginPress.bind(this)}
    //             title='Login' />
    //         <Button
    //             onPress={this.onSignUpPress.bind(this)}
    //             title='Sign Up' />

    //     </View>
    // }

    render() {
        return (
            <View>
                <Card alignItems='center' marginTop={0}>
                    <Image style={styles.logo} source={require('../Images/developer.png')} />
                </Card>
                <FormLabel>NPK:</FormLabel>
                <TextInput
                    style={styles.itemInput}
                    value={this.state.npk}
                    onChangeText={npk => this.setState({ npk })}
                    placeholder='Masukkan NPK Anda!'
                />
                <FormLabel>Nama:</FormLabel>
                <TextInput
                    style={styles.itemInput}
                    value={this.state.nama}
                    placeholder='Masukkan Nama Anda!'
                    onChangeText={nama => this.setState({ nama })} 
                />
                <FormLabel>HP:</FormLabel>
                <TextInput
                    style={styles.itemInput}
                    value={this.state.hp}
                    placeholder='Masukkan HP Anda!'
                    onChangeText={hp => this.setState({ hp })} 
                />
                <FormLabel>E-Mail:</FormLabel>
                <TextInput
                    style={styles.itemInput}
                    value={this.state.email}
                    placeholder='Masukkan E-Mail Anda!'
                    onChangeText={email => this.setState({ email })} 
                />
                <FormLabel>Alamat:</FormLabel>
                <TextInput
                    style={styles.itemInput}
                    value={this.state.alamat}
                    placeholder='Masukkan Alamat Anda!'
                    onChangeText={alamat => this.setState({ alamat })} 
                />
                <Text>{this.state.error}</Text>
                {/* {this.renderButtonOrLoading()} */}

                <Button
                    //onPress={this.onLoginPress.bind(this)}
                    onPress={ ()=> alert('Data sudah disimpan!')}
                    title='Save' 
                    width={20}
                />
                <Button
                    //onPress={this.onSignUpPress.bind(this)}
                    title='Cancel' 
                    width={20}
                />
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
        height: 75,
        width: 75,
    },
    itemInput: {
      height: 35,
      //width: 35, 
      padding: 4,
      marginRight: 5,
      marginLeft: 24,
      fontSize: 15,
      borderWidth: 0,
      borderColor: 'lightblue',
      borderRadius: 8,
      color: 'blue'
    },
});


// import React, {Component} from 'react';
// import {Platform, StyleSheet, Text, View} from 'react-native';


// export default class DeveloperScreen extends Component{
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.welcome}>Developer Screen!</Text>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 30,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });
