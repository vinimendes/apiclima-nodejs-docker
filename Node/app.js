const express = require('express');
const fetch = require('node-fetch');
const app = express();
const Clima = require('./models/Clima');

const db = require('./models/db');

const PORT = 8080;
const HOST = '0.0.0.0';
const API_KEY = "a3f5ca9d8712288e670d14d303547f5f";

app.use(express.json());

const getClima = async (cidade) => {
    
    const url = 
    `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&units=metric&appid=${API_KEY}&lang-pt_br`;
  
          const resposta = await fetch(url);
          const data = await resposta.json();
  
          return data
  }


app.get('/', async (req, res) => {

    const data = await getClima('maceio');
  
    res.send(`${data.name}
              ${parseInt(data.main.temp)}
              `);
  });


app.get("/maceio", async (req, res) => {
    
    const infoClima = await getClima('maceio');
    //console.log(`Nome: ${infoClima.name}, Temp: ${infoClima.main.temp}`);

    const infoFormatada = {
        "nome": infoClima.name,
        "temp": infoClima.main.temp
    };

    await Clima.create(infoFormatada)
    .then(() => {
        return res.json({
            erro: false,
            mensagem: "Clima de Maceio registrado"
        })
    }).catch(() => {
        return res.status(400).json({
            erro: true,
            mensagem: "erro: clima n registrado"
        })
    })

})

app.get("/florianopolis", async (req, res) => {
    
    const infoClima = await getClima('florianopolis');
    //console.log(`Nome: ${infoClima.name}, Temp: ${infoClima.main.temp}`);

    const infoFormatada = {
        "nome": infoClima.name,
        "temp": infoClima.main.temp
    };

    await Clima.create(infoFormatada)
    .then(() => {
        return res.json({
            erro: false,
            mensagem: "Clima de Florianopolis registrado"
        })
    }).catch(() => {
        return res.status(400).json({
            erro: true,
            mensagem: "erro: clima n registrado"
        })
    })

})

app.listen(PORT, HOST, () => {
    console.log(`Running on http://${HOST}:${PORT}`);
  });
