import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';


export default class NotificationScreen extends Component{
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>NotificationScreen!</Text>
      </View>
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
