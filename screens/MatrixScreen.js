import React, { Component } from 'react';
import { StyleSheet, ScrollView, ActivityIndicator, View, Text, Image, TouchableWithoutFeedback } from 'react-native';
import { List, ListItem, Button, Icon } from 'react-native-elements';
import firebase from '../configDB/firebase';
//import firestore from 'firebase/firestore';

//   const settings = {timestampsInSnapshots: true};
//   firebase.firestore().settings(settings);

class MatrixScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Matrix List',
      headerStyle: {
        backgroundColor: '#3399ff',
      },
      headerRight: (
        <TouchableWithoutFeedback onPress={() => { navigation.push('AddMatrix') }}>
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
    this.ref = firebase.firestore().collection('Mst_Matrix');
    this.unsubscribe = null;
    this.state = {
      isLoading: true,
      matrix: []
    };
  }
  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
  }
  onCollectionUpdate = (querySnapshot) => {
    const matrix = [];
    querySnapshot.forEach((doc) => {
      const { SizeProject, DevelopmentDays, Point} = doc.data();
      matrix.push({
        key: doc.id,
        SizeProject, // DocumentSnapshot
        DevelopmentDays,
        Point
      });
    });
    this.setState({
    matrix,
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
            this.state.matrix.map((item, i) => (
              <ListItem
                key={i}
                title={item.SizeProject}
                leftIcon={{name: 'book', type: 'font-awesome'}}
                onPress={() => {
                  this.props.navigation.navigate('DetailMatrix', {
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

export default MatrixScreen;