import React, { Component } from 'react';
import { StyleSheet, ScrollView, ActivityIndicator, View, TextInput } from 'react-native';
import { Button } from 'react-native-elements';
import firebase from '../configDB/firebase';

class DeveloperScreenEdit extends Component {
  static navigationOptions = {
    title: 'Edit Developer',
    headerStyle: {
      backgroundColor: '#3399ff',
    },
  };
  constructor() {
    super();
    this.state = {
      key: '',
      isLoading: true,
      NPK: '',
      Nama: '',
      HP: '',
      Email: '',
      Alamat: '',
    };
  }
  componentDidMount() {
    const { navigation } = this.props;
    const ref = firebase.firestore().collection('Mst_Developer').doc(JSON.parse(navigation.getParam('boardkey')));
    ref.get().then((doc) => {
      if (doc.exists) {
        const developer = doc.data();
        this.setState({
          key: doc.id,
          NPK: developer.NPK,
          Nama: developer.Nama,
          HP: developer.HP,
          Email: developer.Email,
          Alamat: developer.Alamat,
          isLoading: false
        });
      } else {
        console.log("No such document!");
      }
    });
  }

  updateTextInput = (text, field) => {
    const state = this.state
    state[field] = text;
    this.setState(state);
  }

  updateBoard() {
    this.setState({
      isLoading: true,
    });
    const { navigation } = this.props;
    const updateRef = firebase.firestore().collection('Mst_Developer').doc(this.state.key);
    updateRef.set({
      NPK: this.state.NPK,
      Nama: this.state.Nama,
      HP: this.state.HP,
      Email: this.state.Email,
      Alamat: this.state.Alamat,
    }).then((docRef) => {
      this.setState({
        key: '',
        NPK: '',
        Nama: '',
        HP: '',
        Email: '',
        Alamat: '',
        isLoading: false,
      });
      this.props.navigation.navigate('Developer');
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
            //.large
            leftIcon={{name: 'update'}}
            title='Update'
            onPress={() => this.updateBoard()} />
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

export default DeveloperScreenEdit;