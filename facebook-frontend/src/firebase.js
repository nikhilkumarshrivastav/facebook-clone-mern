import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDg0KUH-2tp5u7Pll_KoqrBHjwXb4hpUAA",
    authDomain: "facebook-mern-clone-app.firebaseapp.com",
    projectId: "facebook-mern-clone-app",
    storageBucket: "facebook-mern-clone-app.appspot.com",
    messagingSenderId: "39979405614",
    appId: "1:39979405614:web:74054be05d77cb1a7feabf"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()
const db = firebase.firestore()

export { auth, provider }
export default db