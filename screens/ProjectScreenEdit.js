import React, { Component } from 'react';
import { StyleSheet, ScrollView, ActivityIndicator, View, TextInput } from 'react-native';
import { Button } from 'react-native-elements';
import firebase from '../configDB/firebase';

class ProjectScreenEdit extends Component {
  static navigationOptions = {
    title: 'Edit Project',
    headerStyle: {
      backgroundColor: '#3399ff',
    },
  };
  constructor() {
    super();
    this.state = {
      key: '',
      isLoading: true,
      ProjectID: '',
      Project: '',
    };
  }
  componentDidMount() {
    const { navigation } = this.props;
    const ref = firebase.firestore().collection('Mst_Project').doc(JSON.parse(navigation.getParam('boardkey')));
    ref.get().then((doc) => {
      if (doc.exists) {
        const project = doc.data();
        this.setState({
          key: doc.id,
          ProjectID: project.ProjectID,
          Project: project.Project,
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
    const updateRef = firebase.firestore().collection('Mst_Project').doc(this.state.key);
    updateRef.set({
      ProjectID: this.state.ProjectID,
      Project: this.state.Project,
    }).then((docRef) => {
      this.setState({
        key: '',
        ProjectID: '',
        Project: '',
        isLoading: false,
      });
      this.props.navigation.navigate('Project');
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
              placeholder={'ProjectID'}
              value={this.state.ProjectID}
              onChangeText={(text) => this.updateTextInput(text, 'ProjectID')}
          />
        </View>
        <View style={styles.subContainer}>
          <TextInput
              placeholder={'Project'}
              value={this.state.Project}
              onChangeText={(text) => this.updateTextInput(text, 'Project')}
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

export default ProjectScreenEdit;