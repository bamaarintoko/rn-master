import axios from 'axios'
import qs from 'qs'

const host      = "url";


export default class Api {
    static POST(end_point,params){
        const url = `${host}${end_point}`;
        const config = {
            headers: {'Authorization': 'Bearer birds flyy south'}
        };
        return axios.post(url,qs.stringify(params),config)
    }

    static GET(end_point){
        const url = `${host}${end_point}`;
        return axios.get(url)
            .then(response=>{return response})
            .catch(error=>{console.log(error)})
    }
    // }
}