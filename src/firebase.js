import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyClGzypODaEIeOJAjW_SydeTuPcv7fSqLo",
    authDomain: "bolchal-a317b.firebaseapp.com",
    projectId: "bolchal-a317b",
    storageBucket: "bolchal-a317b.appspot.com",
    messagingSenderId: "3470179382",
    appId: "1:3470179382:web:81e307313ad2dd62f86c97"
}).auth();