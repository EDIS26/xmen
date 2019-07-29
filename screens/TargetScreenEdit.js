import React, { Component } from 'react';
import { StyleSheet, ScrollView, ActivityIndicator, View, TextInput } from 'react-native';
import { Button } from 'react-native-elements';
import firebase from '../configDB/firebase';

class TargetScreenEdit extends Component {
  static navigationOptions = {
    title: 'Edit Target',
    headerStyle: {
      backgroundColor: '#3399ff',
    },
  };
  constructor() {
    super();
    this.state = {
      key: '',
      isLoading: true,
      Target: '',
    };
  }
  componentDidMount() {
    const { navigation } = this.props;
    const ref = firebase.firestore().collection('Mst_Target').doc(JSON.parse(navigation.getParam('boardkey')));
    ref.get().then((doc) => {
      if (doc.exists) {
        const target = doc.data();
        this.setState({
          key: doc.id,
          Target: target.Target,
          Tahun: target.Tahun,
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
    const updateRef = firebase.firestore().collection('Mst_Target').doc(this.state.key);
    updateRef.set({
      Target: this.state.Target,
      Tahun: this.state.Tahun,
    }).then((docRef) => {
      this.setState({
        key: '',
        Target: '',
        Tahun: '',
        isLoading: false,
      });
      this.props.navigation.navigate('Target');
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

export default TargetScreenEdit;