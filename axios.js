import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://demonstratorrn.firebaseio.com/'
})


export default instance;