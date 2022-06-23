/** Importo modulo express */
const express = require('express');
/** Utilizzo metodo express() e listen()*/
const app = express();

/** Importo il modulo persone */
const { persone } = require('./persone');

/**Routes param*/
app.get('/', (req, res) => {
    res.sendFile('homepage.html', { root: __dirname + '/public' });
})

app.get('/persone', (req, res) => {
    const nuovePersone = persone.map((persona) => {
        const { nome, cognome, eta } = persona;
        return { nome, cognome, eta }
    })
    res.json(nuovePersone);
})

app.get('/persone/:id', (req, res) => {
    console.log(req.params);

    const id = req.params.id;
    const persona = persone.find((persona) => {
        return persona.id === id;
    })
    //const persona = persone.find((persona) => persona.id === id);

    if(!persona) {
        return res.status(404).json({messaggio: "Persona non trovata", code: 404});
    }

    res.json(persona);
})

/** listen() per server in ascolto */
app.listen(3000);
