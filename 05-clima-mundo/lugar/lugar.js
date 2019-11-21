const axios = require('axios');

const getLugarLatLng = async(dir) => {

    const endoedUrl = encodeURI(dir);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${ endoedUrl }`,
        headers: {
            'x-rapidapi-host': 'devru-latitude-longitude-find-v1.p.rapidapi.com',
            'x-rapidapi-key': 'e475694fb0mshc28a0fb8c4e2575p155d44jsnad564a28da19'
        }
    });

    const resp = await instance.get();

    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${ dir }`);
    }

    const data = resp.data.Results[0],
        direccion = data.name,
        lat = data.lat,
        lng = data.lon;

    return {
        direccion,
        lat,
        lng
    }

}

module.exports = {
    getLugarLatLng
}