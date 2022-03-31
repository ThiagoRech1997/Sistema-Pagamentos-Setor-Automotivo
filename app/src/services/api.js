import axios from 'axios'

const api = axios.create({ 
    baseURL: process.env.REACT_APP_API_URL,
    headers: { 
    //    'X-Powered-By': 'Express',
        'Access-Control-Allow-Origin': '*',
    //    'Content-Type': 'application/json; charset=utf-8',
    //    'ETag': 'W/"8b-/yvMyMLOHEs/iNP8PeRNKFhClLQ"',
    }
})


export default api