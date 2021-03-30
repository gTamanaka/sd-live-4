//Note como que tive que copiar todo o boilerplate de novo

//--------------- Começo do boilerplate da última live ------------------------------
const express = require("express");
const app = express();
// Importar SDK do firebase-admin que é diferente do SDK para o cliente Web
var admin = require("firebase-admin");
var bodyParser = require("body-parser");

let credentials = `${__dirname}/credentials.json`; 
let firebase = admin.initializeApp({
  credential: admin.credential.cert(credentials),
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// ---------------------- Fim do boiler plate da última live -------------------------------------------------

app.post("/cadastrar", async (req, res, next) => {
    try {
      console.log(req.body);
      let resp = await firebase.auth().createUser({
        uid: (req.body.user).replace(" ", ".").toLowerCase(),
        displayName: req.body.user,
        password: req.body.pwd,
        email: req.body.email,
      });
      console.log(resp.toJSON())
      res.status(201).send("Usuário Criado com Sucesso");
    } catch (error) {
      console.log(error.errorInfo)
      res.status(400).send(error.errorInfo.message)
    }
  });

  app.listen(3000, async () => {
    console.log("User Service Up");
    // console.log(x);
  });