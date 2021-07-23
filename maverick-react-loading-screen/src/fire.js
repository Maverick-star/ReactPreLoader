import firebase from 'firebase';  
  
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyCr1ZE6JM5AsMybXKSKnsl6md2B6M0679E",
    authDomain: "project-thelma.firebaseapp.com",
    projectId: "project-thelma",
    storageBucket: "project-thelma.appspot.com",
    messagingSenderId: "274203368917",
    appId: "1:274203368917:web:e68b9591b0a2bff158315c",
    measurementId: "G-QP7SHY5K62"
  };
  // Initialize Firebase
  const fire = firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export default fire;
