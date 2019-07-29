import React, { Component } from 'react';
import { StyleSheet, ScrollView, ActivityIndicator, View, TextInput } from 'react-native';
import { Button } from 'react-native-elements';
import firebase from '../configDB/firebase';

class MatrixScreenAdd extends Component {
  static navigationOptions = {
    title: 'Add Matrix',
    headerStyle: {
      backgroundColor: '#3399ff',
    },
  };
  constructor() {
    super();
    this.ref = firebase.firestore().collection('Mst_Matrix');
    this.state = {
      SizeProject: '',
      DevelopmentDays: '',
      Point: '',
      isLoading: false,
    };
  }
  updateTextInput = (text, field) => {
    const state = this.state
    state[field] = text;
    this.setState(state);
  }

  saveBoard() {
    this.setState({
      isLoading: true,
    });
    this.ref.add({
      SizeProject: this.state.SizeProject,
      DevelopmentDays: this.state.DevelopmentDays,
      Point: this.state.Point,
    }).then((docRef) => {
      this.setState({
        SizeProject: '',
        DevelopmentDays: '',
        Point: '',
        isLoading: false,
      });
      this.props.navigation.goBack();
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
      this.setState({
        isLoading: false,
      });
    });
  }

  render() {
    if(this.state.isLoading){
      return(
        <View style={styles.activity}>
          <ActivityIndicator size="large" color="#0000ff"/>
        </View>
      )
    }
    return (
      <ScrollView style={styles.container}>
        <View style={styles.subContainer}>
          <TextInput
              placeholder={'SizeProject'}
              value={this.state.SizeProject}
              onChangeText={(text) => this.updateTextInput(text, 'SizeProject')}
          />
        </View>
        <View style={styles.subContainer}>
          <TextInput
              placeholder={'DevelopmentDays'}
              value={this.state.DevelopmentDays}
              onChangeText={(text) => this.updateTextInput(text, 'DevelopmentDays')}
          />
        </View>
        <View style={styles.subContainer}>
          <TextInput
              placeholder={'Point'}
              value={this.state.Point}
              onChangeText={(text) => this.updateTextInput(text, 'Point')}
          />
        </View>
        <View style={styles.button}>
          <Button
            //large
            leftIcon={{name: 'save'}}
            title='Save'
            onPress={() => this.saveBoard()} />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  subContainer: {
    flex: 1,
    marginBottom: 20,
    padding: 5,
    borderBottomWidth: 2,
    borderBottomColor: '#CCCCCC',
  },
  activity: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default MatrixScreenAdd;