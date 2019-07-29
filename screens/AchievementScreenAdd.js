import React, { Component } from 'react';
import { StyleSheet, ScrollView, ActivityIndicator, View, TextInput } from 'react-native';
import { Button } from 'react-native-elements';
import firebase from '../configDB/firebase';
import { Dropdown } from 'react-native-material-dropdown';

class AchievementScreenAdd extends Component {
  static navigationOptions = {
    title: 'Add Achievement',
    headerStyle: {
      backgroundColor: '#3399ff',
    },
  };
  constructor() {
    super();
    this.ref = firebase.firestore().collection('Mst_Achievement');
    //let listNPK = [firebase.firestore().collection('Mst_Developer/NPK')];
    this.state = {
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
      //listNPK: []
      // let listNPK = [{
      //   value: 'Banana',
      // }, {
      //   value: 'Mango',
      // }, {
      //   value: 'Pear',
      // }];
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
      Project: this.state.Project,
      DevelopmentDays: this.state.DevelopmentDays,
      SitDays: this.state.SitDays,
      UatDays: this.state.UatDays,
      PirDays: this.state.PirDays,
      SizeProject: this.state.UatDays,
      Point: this.state.Point,
    }).then((docRef) => {
      this.setState({
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

    // let listNPK = [{
    //   value: '12876',
    // }, {
    //   value: '14428',
    // }, {
    //   value: '15550',
    // }];

    //list NPK from firebase
    let listNPK = [];
        firebase.database().ref('Mst_Developer/NPK').once('value', function(snapshot) {
            snapshot.forEach(function(childSnapshot) {
              var childKey = childSnapshot.key;
              var childData = childSnapshot.val();
              listNPK.push(childData);
            }); 
            //console.log("items_load: " + listNPK);
            //return listNPK;
        });

    
    let listNama = [{
      value: 'Suranta Petrus Sinuraya',
    }, {
      value: 'Abrar Chinara Raihan',
    }, {
      value: 'Edi Supono',
    }];

    let listProject = [{
      value: 'Acc.One',
    }, {
      value: 'ACCMe New Generation',
    }, {
      value: 'Deskcoll Rejuvenation Phase 2',
    }];

    if(this.state.isLoading){
      return(
        <View style={styles.activity}>
          <ActivityIndicator size="large" color="#0000ff"/>
        </View>
      )
    }


    return (
      <ScrollView style={styles.container}>
        <Dropdown
          label='NPK'
          data={listNPK}
          value={this.state.NPK}
          onChangeText={(text) => this.updateTextInput(text, 'NPK')}
          // itemTextStyle={{backgroundColor:"white",textColor:"#3399ff"}}
          // textColor="blue"
          baseColor="blue"
          textColor="blue"
          itemColor="blue"
          selectedItemColor="blue"
        />
        <Dropdown
          label='Nama'
          data={listNama}
          value={this.state.Nama}
          onChangeText={(text) => this.updateTextInput(text, 'Nama')}
          // itemTextStyle={{backgroundColor:"white",textColor:"#3399ff"}}
          // textColor="blue"
          baseColor="blue"
          textColor="blue"
          itemColor="blue"
          selectedItemColor="blue"
        />
        <Dropdown
          label='Project'
          data={listProject}
          value={this.state.Project}
          onChangeText={(text) => this.updateTextInput(text, 'Project')}
          // itemTextStyle={{backgroundColor:"white",textColor:"#3399ff"}}
          // textColor="blue"
          baseColor="blue"
          textColor="blue"
          itemColor="blue"
          selectedItemColor="blue"
        />
        <View style={styles.subContainer}>
          <TextInput
              // label='xxx'
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
    //fontColor='#3399ff'
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

export default AchievementScreenAdd;