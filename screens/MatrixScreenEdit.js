import React, { Component } from 'react';
import { StyleSheet, ScrollView, ActivityIndicator, View, TextInput } from 'react-native';
import { Button } from 'react-native-elements';
import firebase from '../configDB/firebase';

class MatrixScreenEdit extends Component {
  static navigationOptions = {
    title: 'Edit Matrix',
    headerStyle: {
      backgroundColor: '#3399ff',
    },
  };
  constructor() {
    super();
    this.state = {
      key: '',
      isLoading: true,
      SizeProject: '',
      DevelopmentDays: '',
      Point: '',
    };
  }
  componentDidMount() {
    const { navigation } = this.props;
    const ref = firebase.firestore().collection('Mst_Matrix').doc(JSON.parse(navigation.getParam('boardkey')));
    ref.get().then((doc) => {
      if (doc.exists) {
        const matrix = doc.data();
        this.setState({
          key: doc.id,
          SizeProject: matrix.SizeProject,
          DevelopmentDays: matrix.DevelopmentDays,
          Point: matrix.Point,
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
    const updateRef = firebase.firestore().collection('Mst_Matrix').doc(this.state.key);
    updateRef.set({
      SizeProject: this.state.SizeProject,
      DevelopmentDays: this.state.DevelopmentDays,
      Point: this.state.Point,
    }).then((docRef) => {
      this.setState({
        key: '',
        SizeProject: '',
        DevelopmentDays: '',
        Point: '',
        isLoading: false,
      });
      this.props.navigation.navigate('Matrix');
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

export default MatrixScreenEdit;