import firebase from 'firebase';
import firestore from 'firebase/firestore';

// const settings = {timestampsInSnapshots: true};

const config = {
    apiKey: "AIzaSyDCIilsl9QVl84AVsrhpYb6wGjuhqoxc9I",
    authDomain: "myproject-8848f.firebaseapp.com",
    databaseURL: "https://myproject-8848f.firebaseio.com",
    projectId: "myproject-8848f",
    storageBucket: "myproject-8848f.appspot.com",
    messagingSenderId: "768511626616"
};
firebase.initializeApp(config);

// firebase.firestore().settings(settings);

export default firebase;