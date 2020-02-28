import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDRVT9WS6jGTsMx9fzWqaQj3VhdNjJveYc",
  authDomain: "crwn-db-d0a9d.firebaseapp.com",
  databaseURL: "https://crwn-db-d0a9d.firebaseio.com",
  projectId: "crwn-db-d0a9d",
  storageBucket: "crwn-db-d0a9d.appspot.com",
  messagingSenderId: "436194438072",
  appId: "1:436194438072:web:ef835e65907b700e533d4d",
  measurementId: "G-QXBF88S6P5"
};

export const createUserProfileDocument = async (userAuth, additionData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionData
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

// Initialize Firebase
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: `select_account` });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
