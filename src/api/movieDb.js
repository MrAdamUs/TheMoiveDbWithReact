import axios from 'axios';
const KEY = '54cf53d343bae69ed22d9ee92b513f41';

export default axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    params: {
        api_key: KEY,
    }
})

