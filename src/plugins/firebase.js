import firebase from 'firebase'
import 'firebase/auth'

const config = {
  apiKey: "AIzaSyBfSpCCt0TT2wsxBUt2oHKZkjbKpILq1lQ",
  authDomain: "npa-lead.firebaseapp.com",
  projectId: "npa-lead",
  storageBucket: "npa-lead.appspot.com",
  messagingSenderId: "859734783516",
  appId: "1:859734783516:web:da747bf4c1b4016287d1d9",
  measurementId: "G-CQNLQL6PD0"
}

const app = firebase

if (!firebase.apps.length) {
  firebase.initializeApp(config)
}

const provider = new firebase.auth.FacebookAuthProvider()

export default {
  provider,
  auth: app.auth()
}
