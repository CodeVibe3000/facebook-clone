import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyDc85dCh_36mYvBVJsB7Ik2vrNilmjyihA",
    authDomain: "facebook-vvalluri.firebaseapp.com",
    databaseURL: "https://facebook-vvalluri.firebaseio.com",
    projectId: "facebook-vvalluri",
    storageBucket: "facebook-vvalluri.appspot.com",
    messagingSenderId: "237033120622",
    appId: "1:237033120622:web:61c6c3f4ffc807e674977f"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider }

export default db