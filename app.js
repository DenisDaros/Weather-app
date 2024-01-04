const request = require('request')
 
const url = 'http://api.weatherapi.com/v1/current.json?key=37a9290dd0b74893b8c212201232706&q=London'

request({ url: url, json: true }, (error, response) => {
    // json: true: Essa opção configura a biblioteca request para analisar automaticamente a resposta como JSON. Ao definir json: true, a biblioteca realizará a análise JSON automaticamente no corpo da resposta, transformando-o de uma string JSON em um objeto JavaScript.

    // Função de callback que é chamada quando a requisição é concluída

    if (error) {
        console.log('Error: No conection');
    } else if (response.body.error) { 
        console.log('Error:' + response.body.error.message);
     } else {
        const data = response.body;
        console.log(data.current);
    }
})