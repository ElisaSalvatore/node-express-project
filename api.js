const express = require('express');
const app = express();

const personeRouter = require('./routes/personeR')

app.use(express.json());
//app.use(express.urlencoded({extended: false})); //per gestire dati da un form 

app.use('/api/persone', personeRouter);

app.listen(3000);