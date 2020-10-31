import * as firebase from "firebase";
import "firebase/storage";

var firebaseConfig = {
  apiKey: "AIzaSyCvTAj33fWnVk0F08U4s9PLGQB_qIorsp4",
  authDomain: "olx-clone-by-shanshaikh.firebaseapp.com",
  databaseURL: "https://olx-clone-by-shanshaikh.firebaseio.com",
  projectId: "olx-clone-by-shanshaikh",
  storageBucket: "olx-clone-by-shanshaikh.appspot.com",
  messagingSenderId: "227654519248",
  appId: "1:227654519248:web:d3963e375ed456b2bdd1d5",
  measurementId: "G-V8M0G9WCWP",
};
// Initialize Firebase
var fireDb = firebase.initializeApp(firebaseConfig);

var storage = firebase.storage();
export { fireDb, storage };
export default firebase;
