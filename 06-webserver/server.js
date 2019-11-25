const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));

// Expres HBS Engine
app.set('view engine', 'hbs');

app.get('/', function(req, res) {
    res.render('home', {
        nombre: 'Michael',
        anio: new Date().getFullYear()
    });
});

app.listen(8080, () => {
    console.log('Escuchando peticiones en el puerto 8080')
});