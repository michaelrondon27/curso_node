const axios = require('axios');

const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=2650b7759dd28c415d892ee87d3c0821&units=metric`)

    return resp.data.main.temp;

}

module.exports = {
    getClima
}