import React, { useEffect, useState } from "react";
import firebase from "firebase/app";

import axios from "axios";

export const Config = () => {
  useEffect(() => {
    firebase.auth().onAuthStateChanged(async (user) => {
        let token = await user.getIdToken()
        getSecretPhrase(token)
    })

  }, []);

  const [frase, setFrase] = useState("Você precisa estar autentificado")

  const getSecretPhrase = async (token) => {
    try {
      let resp = await axios.get(
        `http://${window.location.hostname}/user/config`,
        {
            headers: { Authorization: `Bearer ${token}` }
        }
      );
      setFrase(resp.data)
    } catch (error) {
        // alert(error)
    }
  };

  return (
    <div>
      <h1>Config</h1>
      <p>{frase}</p>
    </div>
  );
};
