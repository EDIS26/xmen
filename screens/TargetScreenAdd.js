import React, { Component } from 'react';
import { StyleSheet, ScrollView, ActivityIndicator, View, TextInput } from 'react-native';
import { Button } from 'react-native-elements';
import firebase from '../configDB/firebase';

class TargetScreenAdd extends Component {
  static navigationOptions = {
    title: 'Add Target',
    headerStyle: {
      backgroundColor: '#3399ff',
    },
  };
  constructor() {
    super();
    this.ref = firebase.firestore().collection('Mst_Target');
    this.state = {
      Target: '',
      Tahun: '',
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
      Target: this.state.Target,
      Tahun: this.state.Tahun,
    }).then((docRef) => {
      this.setState({
        Target: '',
        Tahun: '',
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
              placeholder={'Tahun'}
              value={this.state.Tahun}
              onChangeText={(text) => this.updateTextInput(text, 'Tahun')}
          />
        </View>
        <View style={styles.subContainer}>
          <TextInput
              placeholder={'Target'}
              value={this.state.Target}
              onChangeText={(text) => this.updateTextInput(text, 'Target')}
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

export default TargetScreenAdd;