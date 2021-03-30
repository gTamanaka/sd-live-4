/**
 * A função deste serviço é Dublê para a o consumer que fizemos na aula 1
 * Só por facilidade não vamos colocar o Kafka junto neste processo
 */

const axios = require("axios").default;
const max = 20
const min = 4
console.log("Up Consumer");

setInterval(async () => {
  try {
    let nivel = Math.random() * (max - min) + min;
    await axios.post("http://servidor:3000/salvar-leituras", {
      sensor: "temperatura 1",
      leitura: nivel,
      timestamp: new Date().getTime()
    });
  } catch (error) {
      console.error("Não enviou, adicionar lógica para salvar e rententar")
  }
}, 10000);
