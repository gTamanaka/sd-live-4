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

app.post("/create-sensor", async (req, res, next) => {
  try {
    await db.collection("sensors").doc(req.body.sensor).set({});
    res.status(200).send("Sensor Created");
  } catch (error) {
    console.log(error);
    res.status(400).send("Failed to create Sensor");
  }
});

app.listen(3000, async () => {
  console.log("Sensor Server Up");
  // console.log(x);
});
