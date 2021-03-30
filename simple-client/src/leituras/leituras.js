import React, { useState, useEffect } from "react";
import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDy8yICkmItkLql2fVILsvfhYUpQ4Mxw8E",
  authDomain: "aula-sd-3.firebaseapp.com",
  projectId: "aula-sd-3",
  storageBucket: "aula-sd-3.appspot.com",
  messagingSenderId: "571322533809",
  appId: "1:571322533809:web:4ad15e561ddedb65229f90",
};

const Leituras = () => {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  } else {
    firebase.app(); 
  }

  const [reading, setReading] = useState("Carregando");

  useEffect(() => {
    const db = firebase.firestore();
    console.log(db);
    console.log("Chamou");
    let cards = [];
    db.collection("sensors")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          let content = JSON.stringify(doc.data(), null, 4);
          cards.push(
            <div>
              <h3>{doc.id}</h3>
              <pre>
              <code>{content}</code>
              </pre>
            </div>
          );
        });
        setReading(cards);
      }).catch(err=>{
        setReading("Você não tem permissão para ver este conteúdo, faça login por favor!")
      })
  }, []);

  return (
    <article>
      <h1>Leituras</h1>
      <div>{reading}</div>
    </article>
  );
};

export default Leituras;
