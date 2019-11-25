const express = require('express');
const app = express();

app.get('/', function(req, res) {
    // res.send('Hello World')

    let salida = {
        nombre: 'Michael',
        edad: 26,
        url: req.url
    };

    res.send(salida);
});

app.listen(8080, () => {
    console.log('Escuchando peticiones en el puerto 8080')
});