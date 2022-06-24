const auth = (req, res, next) => {
    const { user } = req.query;
    if(user === "luca") {
        next();
    }else{
      res.status(401).send("Non sei autorizzato.")
    }
    console.log("accesso effettuato")

    next();
}

module.exports = auth;