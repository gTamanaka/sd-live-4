import React, { useState, useEffect } from "react";
import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDy8yICkmItkLql2fVILsvfhYUpQ4Mxw8E",
  authDomain: "aula-sd-3.firebaseapp.com",
  projectId: "aula-sd-3",
  storageBucket: "aula-sd-3.appspot.com",
  messagingSenderId: "571322533809",
  appId: "1:571322533809:web:4ad15e561ddedb65229f90",
};

const Home = () => {
  //   if (!firebase.apps.length) {
  //   } else {
  //       console.log("Exist")
  //   }
  const [user, setUser] = useState(
    "Por favor realize o seu cadastro ou faça login"
  );

  useEffect(() => {
    if (firebase.apps.length === 0) {
      firebase.initializeApp(firebaseConfig);
    }
    firebase.app();
    firebase.auth().onAuthStateChanged((use) => {
      let auth = firebase.app().auth();
      if (auth.currentUser != null) {
        auth.currentUser
          .getIdToken(/* forceRefresh */ true)
          .then(function (idToken) {
            console.log(idToken);
            let info = JSON.parse(atob(idToken.split(".")[1]));
            setUser(`Olá ${info.name}`);
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    });
  }, []);

  return (
    <div>
      <h1>Bem vindo a SD Live 4</h1>
      <p>{user}</p>
    </div>
  );
};

export default Home;
