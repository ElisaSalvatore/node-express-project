const persone = [
    {
        id: "1",
        nome: "Mario",
        congnome: "Rossi",
        eta: 24,
        indirizzo: {
            citta: "Torino",
            via: "via Milano, 43",
            cap: "34567"
        },
        interessi: ["basket", "calcio"]
    },
    {
        id: "2",
        nome: "Anna",
        congnome: "Verdi",
        eta: 24,
        indirizzo: {
            citta: "Milano",
            via: "via Roma, 4",
            cap: "98765"
        },
        interessi: ["pallamano", "rugby"]
    },
]

/** Esportiamo il modulo */
module.exports = {persone};