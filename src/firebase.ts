import firebase from 'firebase/app'
import 'firebase/database'

const config = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  databaseURL: process.env.REACT_APP_DBURL,
  projectId: process.env.REACT_APP_PID,
  storageBucket: process.env.REACT_APP_SB,
  messagingSenderId: process.env.REACT_APP_MSID,
  appId: process.env.REACT_APP_APPID
};

firebase.initializeApp(config);

const databaseRef = firebase.database().ref();
export const leaderboardRef = databaseRef.child('leaderboard')
export default firebase;

