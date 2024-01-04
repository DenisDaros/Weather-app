const request = require('request')
 
const url = 'http://api.weatherstack.com/current?access_key=5f154b82bee55667dd4ebf69eca79e12&query=37,8267,-122.4233'

request({ url: url }, (error, response) => {
    // Função de callback que é chamada quando a requisição é concluída

    if (error) {
        console.error('Erro:', error);
    } else {
        const data = JSON.parse(response.body);
        console.log(data.current);
    }
})