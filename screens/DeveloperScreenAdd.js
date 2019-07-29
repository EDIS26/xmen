import React, { Component } from 'react';
import { StyleSheet, ScrollView, ActivityIndicator, View, TextInput } from 'react-native';
import { Button } from 'react-native-elements';
import firebase from '../configDB/firebase';

class DeveloperScreenAdd extends Component {
  static navigationOptions = {
    title: 'Add Developer',
    headerStyle: {
      backgroundColor: '#3399ff',
    },
  };
  constructor() {
    super();
    this.ref = firebase.firestore().collection('Mst_Developer');
    this.state = {
      NPK: '',
      Nama: '',
      HP: '',
      Email: '',
      Alamat: '',
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
      NPK: this.state.NPK,
      Nama: this.state.Nama,
      HP: this.state.HP,
      Email: this.state.Email,
      Alamat: this.state.Alamat,
    }).then((docRef) => {
      this.setState({
        NPK: '',
        Nama: '',
        HP: '',
        Email: '',
        Alamat: '',
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
              placeholder={'NPK'}
              value={this.state.NPK}
              onChangeText={(text) => this.updateTextInput(text, 'NPK')}
          />
        </View>
        <View style={styles.subContainer}>
          <TextInput
              placeholder={'Nama'}
              value={this.state.Nama}
              onChangeText={(text) => this.updateTextInput(text, 'Nama')}
          />
        </View>
        <View style={styles.subContainer}>
          <TextInput
              placeholder={'HP'}
              value={this.state.HP}
              onChangeText={(text) => this.updateTextInput(text, 'HP')}
          />
        </View>
        <View style={styles.subContainer}>
          <TextInput
              placeholder={'Email'}
              value={this.state.Email}
              onChangeText={(text) => this.updateTextInput(text, 'Email')}
          />
        </View>
        <View style={styles.subContainer}>
          <TextInput
              multiline={true}
              numberOfLines={4}
              placeholder={'Alamat'}
              value={this.state.Alamat}
              onChangeText={(text) => this.updateTextInput(text, 'Alamat')}
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

export default DeveloperScreenAdd;