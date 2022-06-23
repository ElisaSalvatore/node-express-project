/** Importo modulo express */
const express = require('express');
/** Utilizzo metodo express() e listen()*/
const app = express();

/** Importo il modulo persone */
const {persone} = require('./persone');

/**Creo un JSON */
app.get('/', (req, res) => {
    res.json(persone)
})

/** listen() per server in ascolto */
app.listen(3000);
