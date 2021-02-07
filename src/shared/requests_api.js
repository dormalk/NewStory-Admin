import { rejects } from 'assert';
import { DevelopmentSettings } from './enviroment_vars';

const getRandomPost = (token) => new Promise((resolve,reject) => {
    const headers = {
        'Authorization': `Bearer ${token}`,
        "enable-cors": true,
        'Access-Control-Allow-Origin': '*',
    }
    var url = new URL(`https://cors-anywhere.herokuapp.com/${DevelopmentSettings().API_HOST}/demo/post/random`),params = {n:1}
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
    fetch(url, {
        headers: headers,
        method: 'POST'
    })
    .then(response => {
        if(response.status != 200){
            response.text().then(data => console.log(data))
            reject(response)
        }
        return response.json()
    })
    .then(data => resolve(data[0]))
    .catch(e => reject(e))
        
    }
)

export {getRandomPost};