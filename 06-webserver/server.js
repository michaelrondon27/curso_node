const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers');

app.use(express.static(__dirname + '/public'));

// Expres HBS Engine
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

app.get('/', function(req, res) {
    res.render('home', {
        nombre: 'michael'
    });
});

app.get('/about', function(req, res) {
    res.render('about');
});

app.listen(8080, () => {
    console.log('Escuchando peticiones en el puerto 8080')
});