// Import the functions you need from the SDKs you need
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyCQEPIJO7Hv1GqrFJyvuBshSq2JO5u3hVI',

  authDomain: 'mymoney-fbb5b.firebaseapp.com',

  projectId: 'mymoney-fbb5b',

  storageBucket: 'mymoney-fbb5b.appspot.com',

  messagingSenderId: '420022326477',

  appId: '1:420022326477:web:483be5c9eb2aff5c7b4584',
}

// Initialize Firebase

firebase.initializeApp(firebaseConfig)
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, timestamp }
