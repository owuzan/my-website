import firebase from "firebase";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_APIKEY,
  authDomain: "my-website-1f762.firebaseapp.com",
  projectId: "my-website-1f762",
  storageBucket: "my-website-1f762.appspot.com",
  messagingSenderId: "172635383910",
  appId: "1:172635383910:web:ec5e02fe01b4cbcde865a7",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const firestore = firebase.firestore();
