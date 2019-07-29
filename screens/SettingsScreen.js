import React, { Component } from 'react';
import { StyleSheet, ScrollView, ActivityIndicator, View, Text, Image, TouchableWithoutFeedback, Picker } from 'react-native';
import { List, ListItem, Button, Icon } from 'react-native-elements';
import firebase from '../configDB/firebase';
//import firestore from 'firebase/firestore';

//   const settings = {timestampsInSnapshots: true};
//   firebase.firestore().settings(settings);

class SettingsScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Achievement List',
      headerStyle: {
        backgroundColor: '#3399ff',
      },
      headerRight: (
        <TouchableWithoutFeedback onPress={() => { navigation.push('AddAchievement') }}>
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
    this.ref = firebase.firestore().collection('Mst_Developer');
    this.unsubscribe = null;
    this.state = {
      isLoading: true,
      achievement: []
    };
  }
  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
  }
  onCollectionUpdate = (querySnapshot) => {
    const achievement = [];
    querySnapshot.forEach((doc) => {
      const { NPK, Nama, Project, DevelopmentDays, SitDays, UatDays, PirDays, SizeProject, Point } = doc.data();
      achievement.push({
        key: doc.id,
        NPK, // DocumentSnapshot
        Nama,
        Project,
        DevelopmentDays,
        SitDays,
        UatDays,
        PirDays,
        SizeProject,
        Point
      });
    });
    this.setState({
      achievement,
      isLoading: false,
    });
  }

  pickerChange(index) {

    this.state.achievement.map((v, i) => {

      if (index === i) {

        this.setState({
          currentLabel: this.state.achievement[index].Nama,
          currency: this.state.achievement[index].Nama

        })
      }
    })
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={styles.activity}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      )
    }
    return (
      // <ScrollView style={styles.container}>
      //   <List>
      //     {
      //       this.state.achievement.map((item, i) => (
      // <ListItem
      //   key={i}
      //   title={item.Nama}
      //   leftIcon={{name: 'book', type: 'font-awesome'}}
      //   onPress={() => {
      //     this.props.navigation.navigate('DetailAchievement', {
      //       boardkey: `${JSON.stringify(item.key)}`,
      //     });
      //   }}
      // />
      // <Picker
      //   selectedValue={this.state.achievement}
      //   style={{height: 50, width: 100}}
      //   onValueChange={(item, i) =>
      //   this.setState({achievement: i})}>
      // </Picker>  

      //       ))
      //     }
      //   </List>
      // </ScrollView>

      <ScrollView style={styles.container}>
        <Picker
        selectedValue={this.state.achievement}
        style={{ height: 50, width: 300 }}
        onValueChange={(itemValue, itemIndex) =>
          this.setState({achievement: itemValue})
        }>

        {/* <Picker
          selectedValue={this.state.achievement}
          style={{ height: 50, width: 300 }}
          onValueChange={(itemValue, itemIndex) =>
            this.pickerChange(itemIndex)}>{
                this.state.achievement.map( v => {
                  return <Picker.Item label={v.currentLabel} value={v.currency} />
            })
          }> */}
  
        {/* <Picker.Item label="Java" value="java" />    
        <Picker.Item label="JavaScript" value="js" />
        <Picker.Item label="React Native" value="rn" />    
        <Picker.Item label="uniPaaS" value="ups" /> */}

        {this.state.achievement.map( element =>
            <Picker.Item label={element} value={element} />
        )}
        </Picker>

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

export default SettingsScreen;