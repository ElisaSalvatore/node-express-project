const express = require('express');
const app = express();

/* Moduli custom */
const middlewareMod = require('./modulo-middleware');
const auth = require('./auth');

//app.use('persone', middlewareMod) //middleware esclusivi
//app.use([middlewareMod, auth]) //middleware multipli
app.use(middlewareMod);

/* Routes */
app.get('/', (req, res) => {
    res.sendFile('homepage.html', { root: __dirname + '/public' })
})

app.get('/about', (req, res) => {
    res.send("Benvenuto nella pagina About!")
})

app.get('/area', auth, (req, res) => {
    res.send("Benvenuto nella tua area privata!")
})

/* esempio middleware esclusivi 
app.get('/persone/ciao', (req, res) => {
    res.send("Persone ciao")
})

app.get('/persone/miao', (req, res) => {
    res.send("Persone miao")
})
*/

/* Server in ascolto */
app.listen(3000);