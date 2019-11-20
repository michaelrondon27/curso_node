const axios = require('axios');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

const endoedUrl = encodeURI(argv.direccion);

const instance = axios.create({
    baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${ endoedUrl }`,
    headers: {
        'x-rapidapi-host': 'devru-latitude-longitude-find-v1.p.rapidapi.com',
        'x-rapidapi-key': 'e475694fb0mshc28a0fb8c4e2575p155d44jsnad564a28da19'
    }
});

instance.get().then(resp => {
    console.log(resp.data.Results[0]);
}).catch(err => {
    console.log('ERROR!!!!', err);
});