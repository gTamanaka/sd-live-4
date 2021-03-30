import React, { useEffect } from "react";
import firebase from "firebase/app";
import * as firebaseui from "firebaseui";

const firebaseConfig = {
  apiKey: "AIzaSyDy8yICkmItkLql2fVILsvfhYUpQ4Mxw8E",
  authDomain: "aula-sd-3.firebaseapp.com",
  projectId: "aula-sd-3",
  storageBucket: "aula-sd-3.appspot.com",
  messagingSenderId: "571322533809",
  appId: "1:571322533809:web:4ad15e561ddedb65229f90",
};

const uiConfig = {
  callbacks: {
    signInSuccessWithAuthResult: function (authResult, redirectUrl) {
      // User successfully signed in.
      // Return type determines whether we continue the redirect automatically
      // or whether we leave that to developer to handle.
      return true;
    },
    uiShown: function () {
      // The widget is rendered.
      // Hide the loader.
      document.getElementById("loader").style.display = "none";
    },
  },
  // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
  signInFlow: "popup",
  signInSuccessUrl: "/",
  signInOptions: [
    // Leave the lines as is for the providers you want to offer your users.
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
  ],
};

const Login = () => {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  } else {
    firebase.app();
  }

  useEffect(() => {
    var ui =
      firebaseui.auth.AuthUI.getInstance() ||
      new firebaseui.auth.AuthUI(firebase.auth());
    ui.start("#firebaseui-auth-container", uiConfig);

    firebase
      .auth()
      .signInAnonymously()
      .then(() => {
        // Signed in..
        console.log("Anonimus")
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
      });
  }, []);

  return (
    <div>
      <div id="firebaseui-auth-container"></div>
      <div id="loader">Loading...</div>
    </div>
  );
};

export default Login;
