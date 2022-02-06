import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/firestore"

import "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyBcXbXpbcYULGWm_ckhGQmRYgU0jFSOPik",
    authDomain: "upcdb-7a32f.firebaseapp.com",
    projectId: "upcdb-7a32f",
    storageBucket: "upcdb-7a32f.appspot.com",
    messagingSenderId: "16748133365",
    appId: "1:16748133365:web:8abdc52d01f0c892fe7ebc",
    measurementId: "G-91L6H4GD0Q"
};


function initFireBase() {
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }
}


initFireBase();
export { firebase };

