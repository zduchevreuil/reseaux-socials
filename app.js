// pour lancer le code il faut aller dans le terminal et taper la commande : node app.js
const express = require('express');

const app = express();
const port = 3000;
app.get('/', (req, res) => res.send('Hello, Express 3!'));

app.get('/api/pokemons/:id', (req, res) => {
    const id = req.params.id;
    res.send(`Vous avez dmd le pokemon n*${id}`);

});

app.listen(port, () => console.log(`Notre application Node est démarrée sur : http://localhost:${port}`));


