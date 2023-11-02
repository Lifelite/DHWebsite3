import {initializeApp} from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyBwUiYjX6d8azQobMYTmfWoV0GNEmJ-7AI",
    authDomain: "drunken-huntsman-website.firebaseapp.com",
    databaseURL: "https://drunken-huntsman-website-default-rtdb.firebaseio.com",
    projectId: "drunken-huntsman-website",
    storageBucket: "drunken-huntsman-website.appspot.com",
    messagingSenderId: "372293584198",
    appId: "1:372293584198:web:31790e84ba875b9f825147",
    measurementId: "G-ZS15LY1VT3"
};

export let app = initializeApp(firebaseConfig);