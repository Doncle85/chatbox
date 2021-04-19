import Rebase from 're-base';
import firebase from 'firebase/app';
import 'firebase/database';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDZSmIPSRLoXfMGOGDQYuuNjHYo4NhxkDM",
    authDomain: "chatbox-app-c4d80.firebaseapp.com",
    databaseURL: "https://chatbox-app-c4d80-default-rtdb.europe-west1.firebasedatabase.app",
})

const base = Rebase.createClass(firebase.database())

export { firebaseApp };

export default base