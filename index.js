/** Importo modulo express */
const express = require('express');

/** Utilizzo metodo express() e listen()*/
const app = express();

/** Getione della richiesta Homepage */
app.get('/', (req, res) => {
	res.send(`<h1>Homepage</h1>
    <p>Hello world!</p>
    `);
})

/** Getione della richiesta Contatti */
app.get('/contatti', (req, res) => {
    res.send(`<h1>Contatti</h1>`);
})

/** Getione della richiesta About */
app.get('/about', (req, res) => {
    res.send(`<h1>About</h1>`);
})

/** Gestione di una richiesta qualsisi NON esistente */
app.get('*', (req, res) => {
    res.send(`<h1>Pagina non trovata!</h1>
    <p>Torna alla <a href="/">homepage</a></p>
    `);
})

/** listen() per server in ascolto */
app.listen(3000);
