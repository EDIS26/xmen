import React, { Component } from 'react';
import { StyleSheet, ScrollView, ActivityIndicator, View, Text, Image, TouchableWithoutFeedback } from 'react-native';
import { List, ListItem, Button, Icon } from 'react-native-elements';
import firebase from '../configDB/firebase';
//import firestore from 'firebase/firestore';

//   const settings = {timestampsInSnapshots: true};
//   firebase.firestore().settings(settings);

class ProjectScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Project List',
      headerStyle: {
        backgroundColor: '#3399ff',
      },
      // headerTintColor: 'darkorange',
      // headerTitleStyle: {
      //   fontWeight: 'bold',
      // },
      headerRight: (
        <TouchableWithoutFeedback onPress={() => { navigation.push('AddProject') }}>
        <Image
            source={require('../Images/add.png')}
            style={[styles.logo]} 
        />
        </TouchableWithoutFeedback>
      ),
    };
  };
  constructor() {
    super();
    this.ref = firebase.firestore().collection('Mst_Project');
    this.unsubscribe = null;
    this.state = {
      isLoading: true,
      project: []
    };
  }
  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
  }
  onCollectionUpdate = (querySnapshot) => {
    const project = [];
    querySnapshot.forEach((doc) => {
      const { ProjectID, Project} = doc.data();
      project.push({
        key: doc.id,
        ProjectID, // DocumentSnapshot
        Project
      });
    });
    this.setState({
    project,
      isLoading: false,
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
        <List>
          {
            this.state.project.map((item, i) => (
              <ListItem
                key={i}
                title={item.Project}
                leftIcon={{name: 'book', type: 'font-awesome'}}
                onPress={() => {
                  this.props.navigation.navigate('DetailProject', {
                    boardkey: `${JSON.stringify(item.key)}`,
                  });
                }}
              />
            ))
          }
        </List>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingBottom: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  logo: {
    width: 35,
    height: 35,
    marginRight: 4,
    marginTop: 4,
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

export default ProjectScreen;