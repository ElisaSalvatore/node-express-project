const express = require('express');
const app = express();
const {persone} = require('./persone')
// const { dirname } = require('path');

app.use(express.json());
//app.use(express.urlencoded({extended: false})); //per gestire dati da un form 

/* API GET */
//restituisce tutti i risultati
app.get('/api/persone',(req, res) => {
    res.status(200).json({success: true, data: persone});
    //res.sendFile('./form.html', {root: __dirname + '/public'});
})

//restituisce un risulato specifico (:id) 
app.get('/api/persone/:id', (req, res) => {
    const {id} = req.params;

    const persona = persone.find(
        (persona) => persona.id === id
    )
    res.status(200).json({
        succes: true,
        data: persona,
    })
})

/* API POST */
app.post('/api/persone', (req, res) => {
    console.log(req.body);
    const persona = req.body;
    persone.push(persona);

    res.status(200).json({success: true, data: persone})
})

/* API PUT */
app.put('/api/persone/:id', (req, res) => {
    const { id } = req.params;
    const persona = req.body; //req.body sono i dati che passiamo alla richiesta 
    persone[Number(id) - 1] = persona; // per modificare l'elemento in toto
    //persone[Number(id) - 1].nome = persona.nome; //per modificare solo il nome 
    
    res.status(200).json({success: true, data: persone})
})

/* API DELETE */
app.delete('/api/persone/:id', (req, res) => {
    const { id } = req.params;
    const index = persone.findIndex( persona => persona.id === id);
    persone.splice(index, 1);
    
    res.status(200).json({success: true, data: persone});
})

app.listen(3000);