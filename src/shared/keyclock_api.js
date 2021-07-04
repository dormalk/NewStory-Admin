import { DevelopmentSettings } from './enviroment_vars';
import axios from 'axios';
const refresh_token = async (code) => {
    const headers = {
        'grant_type': 'authorization_code',
        'code': code,
        'enable-cors': 'false',
        'client_id': 'newstory-react-dev',
    }
    console.log(headers)
    try{
        const response = await axios.post(`${DevelopmentSettings().KEYCLOCK_HOST}/auth/realms/newstory/protocol/openid-connect/token?redirect_uri=http://${window.location.hostname}`, {headers: headers})
        console.log(response);
    }catch(e){
        console.error(e)
    }
}

export {refresh_token};