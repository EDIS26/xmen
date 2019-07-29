import React, { Component } from 'react';
import { StyleSheet, ScrollView, ActivityIndicator, View, TextInput } from 'react-native';
import { Button } from 'react-native-elements';
import firebase from '../configDB/firebase';

class AchievementScreenEdit extends Component {
  static navigationOptions = {
    title: 'Edit Achievement',
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
      Project: '',
      DevelopmentDays: '',
      SitDays: '',
      UatDays: '',
      PirDays: '',
      SizeProject: '',
      Point: '',
    };
  }
  componentDidMount() {
    const { navigation } = this.props;
    const ref = firebase.firestore().collection('Mst_Achievement').doc(JSON.parse(navigation.getParam('boardkey')));
    ref.get().then((doc) => {
      if (doc.exists) {
        const achievement = doc.data();
        this.setState({
          key: doc.id,
          NPK: achievement.NPK,
          Nama: achievement.Nama,
          Project: achievement.Project,
          DevelopmentDays: achievement.DevelopmentDays,
          SitDays: achievement.SitDays,
          UatDays: achievement.UatDays,
          PirDays: achievement.PirDays,
          SizeProject: achievement.SizeProject,
          Point: achievement.Point,
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
    const updateRef = firebase.firestore().collection('Mst_Achievement').doc(this.state.key);
    updateRef.set({
      NPK: this.state.NPK,
      Nama: this.state.Nama,
      Project: this.state.Project,
      DevelopmentDays: this.state.DevelopmentDays,
      SitDays: this.state.SitDays,
      UatDays: this.state.UatDays,
      PirDays: this.state.PirDays,
      SizeProject: this.state.SizeProject,
      Point: this.state.Point,
    }).then((docRef) => {
      this.setState({
        key: '',
        NPK: '',
        Nama: '',
        Project: '',
        DevelopmentDays: '',
        SitDays: '',
        UatDays: '',
        PirDays: '',
        SizeProject: '',
        Point: '',
        isLoading: false,
      });
      this.props.navigation.navigate('Achievement');
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
              placeholder={'Project'}
              value={this.state.Project}
              onChangeText={(text) => this.updateTextInput(text, 'Project')}
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
              placeholder={'SitDays'}
              value={this.state.SitDays}
              onChangeText={(text) => this.updateTextInput(text, 'SitDays')}
          />
        </View>
        <View style={styles.subContainer}>
          <TextInput
              placeholder={'UatDays'}
              value={this.state.UatDays}
              onChangeText={(text) => this.updateTextInput(text, 'UatDays')}
          />
        </View>
        <View style={styles.subContainer}>
          <TextInput
              placeholder={'PirDays'}
              value={this.state.PirDays}
              onChangeText={(text) => this.updateTextInput(text, 'PirDays')}
          />
        </View>
        <View style={styles.subContainer}>
          <TextInput
              placeholder={'SizeProject'}
              value={this.state.SizeProject}
              onChangeText={(text) => this.updateTextInput(text, 'SizeProject')}
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

export default AchievementScreenEdit;