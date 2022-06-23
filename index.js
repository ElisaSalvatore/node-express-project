/** Importo modulo express */
const express = require('express');
const { dirname } = require('path');
/** Utilizzo metodo express() e listen()*/
const app = express();

/** Comunico in quale cartella si trovano i file statici */
app.use(express.static('public'));

/** Getione della richiesta Homepage */
app.get('/', (req, res) => {
	res.sendFile('homepage.html', {root: __dirname + '/public'});
})

/** Getione della richiesta Contatti */
app.get('/contatti', (req, res) => {
    res.sendFile('contatti.html', {root: __dirname + '/public'});
})

/** Getione della richiesta About */
app.get('/about', (req, res) => {
    res.sendFile('about.html', {root: __dirname + '/public'});
})

/** Gestione di una richiesta qualsisi NON esistente */
app.get('*', (req, res) => {
    res.sendFile('404.html', {root: __dirname + '/public'});
})

/** listen() per server in ascolto */
app.listen(3000);
