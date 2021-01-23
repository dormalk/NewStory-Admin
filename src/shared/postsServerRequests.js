import axios from 'axios';
const SERVER_URL = 'https://api.newstory.gq';

const getRandromPost = async(n) => {
    try{
        const response = await axios.post(`${SERVER_URL}//demo/post/random?n=${n}`)
        return response;
    }catch(e){
        console.error(e)
    }
}

export {getRandromPost}