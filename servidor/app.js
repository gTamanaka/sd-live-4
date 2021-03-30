const express = require("express");
const app = express();
// Importar SDK do firebase-admin que é diferente do SDK para o cliente Web
var admin = require("firebase-admin");
var bodyParser = require("body-parser");
var cors = require("cors");

let credentials = `${__dirname}/credentials.json`; 
let firebase = admin.initializeApp({
  credential: admin.credential.cert(credentials),
});

const db = firebase.firestore(); //Banco de dados de tempo real
app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// app.post("/cadastrar", async (req, res, next) => {
//   try {
//     console.log(req.body);
//     let resp = await firebase.auth().createUser({
//       uid: (req.body.user).replace(" ", ".").toLowerCase(),
//       displayName: req.body.user,
//       password: req.body.pwd,
//       email: req.body.email,
//     });
//     console.log(resp.toJSON())
//     res.status(201).send("Usuário Criado com Sucesso");
//   } catch (error) {
//     console.log(error.errorInfo)
//     res.status(400).send(error.errorInfo.message)
//   }
// });

app.post("/salvar-leituras", async (req, res, next) => {
  try {
    console.log(req.body);
    let timestamp = req.body.timestamp;
    let content = { [timestamp]: req.body.leitura };
    console.log(content);
    //Salvando no db do Firestore
    await db.collection("sensors").doc(req.body.sensor).update(content);
    res.status(201);
  } catch (error) {
    res.status(400).send("Failed to Update");
  }
});

app.post("/create-sensor", async (req, res, next) => {
  try {
    await db.collection("sensors").doc(req.body.sensor).set({});
    res.status(200).send("Sensor Created")
  } catch (error) {
    console.log(error)
    res.status(400).send("Failed to create Sensor")
  }
});

app.listen(3000, async () => {
  console.log("Web Server Up");
  // console.log(x);
});
