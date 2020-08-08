import firebase from 'firebase/app'
import 'firebase/analytics'
import 'firebase/firestore'

//web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDDsNxDVa6ytEh9zy-EYBEP1gHuvTB5k2E',
  authDomain: 'geo-ninja-a0620.firebaseapp.com',
  databaseURL: 'https://geo-ninja-a0620.firebaseio.com',
  projectId: 'geo-ninja-a0620',
  storageBucket: 'geo-ninja-a0620.appspot.com',
  messagingSenderId: '74296216331',
  appId: '1:74296216331:web:58295b87e3659aa455700e',
  measurementId: 'G-2TNBLNPLPP',
}

const firebaseApp = firebase.initializeApp(firebaseConfig)
firebaseApp.analytics()

export default firebaseApp.firestore()
