
  // import * as firebase from "firebase/app"; // old way, wont work anymore
import firebase from "firebase/app";
import "firebase/auth";
// firebase config
const config = {
    apiKey: "AIzaSyBfJPyEkDVH8pv3XM2MwmX3ne0_qRLx3pQ",
    authDomain: "ecommerce-24a67.firebaseapp.com",
    projectId: "ecommerce-24a67",
    storageBucket: "ecommerce-24a67.appspot.com",
    messagingSenderId: "724855071526",
    appId: "1:724855071526:web:1690071387c38d29e857e7"
};
// initialize firebase app
if (!firebase.apps.length) {
  firebase.initializeApp(config);
}
// export
// export default firebase;
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();